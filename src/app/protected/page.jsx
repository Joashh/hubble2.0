import { redirect } from 'next/navigation'
import { LogoutButton } from '@/components/logout-button'
import { createClient } from '@/lib/server'

export default async function ProtectedPage() {
  const supabase = await createClient()

  // 1. Get the authenticated user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    redirect('/auth/login')
  }

  // 2. Fetch the profile row for this user
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('first_name, last_name, role')
    .eq('id', user.id) // `id` should match `auth.users.id`
    .single()

  if (profileError || !profile) {
    redirect('/auth/login') // or handle missing profile gracefully
  }

  return (
    <div className="flex h-svh w-full items-center justify-center gap-2">
      <p>
        Hello <span>{profile.first_name} {profile.last_name}</span> ({profile.role})
      </p>
      <LogoutButton />
    </div>
  )
}
