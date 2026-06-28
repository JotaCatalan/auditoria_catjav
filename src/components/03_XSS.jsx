import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import mdRaw from '../../Docs_catjav/03_XSS_catjav.md?raw'
import xssImg from '../../Docs_catjav/img_catjav/xss_catjav.PNG'
import { AlertTriangle, Image as ImageIcon, Code, Info } from 'lucide-react'

export default function XSS() {
  const lines = mdRaw.split('\n')
  const firstHeadingIndex = lines.findIndex((l) => /^#{1,6}\s+/.test(l))
  let title = 'Cross-Site Scripting (XSS)'
  let content = mdRaw
  if (firstHeadingIndex !== -1) {
    const headingLine = lines[firstHeadingIndex]
    title = headingLine.replace(/^#{1,6}\s+/, '').trim() || title
    lines.splice(firstHeadingIndex, 1)
    content = lines.join('\n')
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex items-start gap-4 mb-4">
          <img src={xssImg} alt="XSS reference" className="w-28 h-28 object-contain rounded-md border" />
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <ImageIcon className="w-6 h-6 text-sky-500" />
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Riesgos, payloads y mitigaciones
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Code className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <Info className="w-5 h-5 text-sky-600" />
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
            h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-6 mb-2" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-xl font-semibold mt-5 mb-2" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-lg font-semibold mt-4 mb-2" {...props} />,
            p: ({node, ...props}) => <p className="text-gray-700 dark:text-gray-300 leading-relaxed my-2" {...props} />,
            a: ({node, ...props}) => <a className="text-sky-600 hover:underline" {...props} />,
            table: ({node, ...props}) => (
              <div className="overflow-x-auto my-4">
                <table className="min-w-full border-collapse" {...props} />
              </div>
            ),
            thead: ({node, ...props}) => <thead className="bg-gray-100 dark:bg-gray-800" {...props} />,
            th: ({node, ...props}) => <th className="px-3 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200 border-b" {...props} />,
            td: ({node, ...props}) => <td className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 border-b" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside my-2" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal list-inside my-2" {...props} />,
            li: ({node, ...props}) => <li className="my-1" {...props} />,
            blockquote: ({node, ...props}) => (
              <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-300 my-4" {...props} />
            ),
            code: ({node, inline, className, children, ...props}) => (
              inline ? (
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm" {...props}>{children}</code>
              ) : (
                <pre className="bg-gray-900 text-white rounded-md p-3 overflow-x-auto" {...props}><code>{children}</code></pre>
              )
            )
          }}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
