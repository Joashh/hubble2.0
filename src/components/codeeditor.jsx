'use client'

import { useState } from "react";
import dynamic from "next/dynamic";

// MonacoEditor is client-side only
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodeEditor({ setshowcode }) {
  const [language, setLanguage] = useState("c");
  const [code, setCode] = useState({
    c: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello World\\n\");\n    return 0;\n}",
    java: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}",
    python: "print('Hello World')"
  });
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    // For demo, we'll just echo the code (replace this with API call)
    // Example: call /api/compile with { code: code[language], language }
    setOutput(`Running ${language} code:\n${code[language]}`);
  }

  return (
   <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col overflow-hidden">
    
    {/* Header */}
    <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Code Editor</h1>
      <button
        className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white font-bold"
        onClick={() => setshowcode(false)}
      >
        ✕
      </button>
    </div>

    {/* Language & Run Section */}
    <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
      <div className="flex gap-2">
        <button
          className={`px-4 py-2 rounded-md border ${language === "c" ? "bg-indigo-600 text-white border-indigo-600" : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-700"}`}
          onClick={() => setLanguage("c")}
        >
          C
        </button>
        <button
          className={`px-4 py-2 rounded-md border ${language === "java" ? "bg-indigo-600 text-white border-indigo-600" : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-700"}`}
          onClick={() => setLanguage("java")}
        >
          Java
        </button>
        <button
          className={`px-4 py-2 rounded-md border ${language === "python" ? "bg-indigo-600 text-white border-indigo-600" : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-700"}`}
          onClick={() => setLanguage("python")}
        >
          Python
        </button>
      </div>
      <button
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
        onClick={handleRun}
      >
        Run
      </button>
    </div>

    {/* Editor & Output */}
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        <MonacoEditor
          height="100%"
          language={language}
          theme="vs-light"
          value={code[language]}
          onChange={(val) => setCode(prev => ({ ...prev, [language]: val }))}
        />
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 border-t dark:border-gray-600 overflow-auto max-h-40">
        <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{output}</pre>
      </div>
    </div>

  </div>
</div>

  );
}
