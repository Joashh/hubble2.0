export default function MainContent()
{
    return(
        <main className="flex-1 flex flex-col items-center justify-start px-8 pt-16">
        <div className="relative w-[700px] h-[55px]">
          <div className="absolute inset-0 rounded bg-gradient-to-r from-[#FFABAB] to-[#FF6F61] z-0"></div>
          <input
            type="text"
            placeholder="Search ..."
            className="relative z-10 border-none rounded w-full h-full px-12 bg-transparent placeholder-gray-700 font-semibold"
            style={{ outline: 'none' }}
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <svg width="24" height="24" fill="none" stroke="#FF6F61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
        </div>
      </main>
    );
}