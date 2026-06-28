// React import not required in newer JSX transforms
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import mdRaw from '../../Docs_catjav/02_SQLI_catjav.md?raw'
import sqliImg from '../../Docs_catjav/img_catjav/sqli_catjav.PNG'

export default function InyeccionSQL() {
  const lines = mdRaw.split('\n')
  const firstHeadingIndex = lines.findIndex((l) => /^#{1,6}\s+/.test(l))
  let title = 'Inyección SQL'
  let content = mdRaw
  if (firstHeadingIndex !== -1) {
    const headingLine = lines[firstHeadingIndex]
    title = headingLine.replace(/^#{1,6}\s+/, '').trim() || title
    lines.splice(firstHeadingIndex, 1)
    content = lines.join('\n')
  }

  return (
    <div className="w-full mx-auto p-6">
      <div className="app-card-inner bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-6 max-w-6xl mx-auto">
        <div className="mb-4 flex items-start gap-4">
          <img src={sqliImg} alt="SQLi reference" className="w-full max-w-full h-auto object-contain rounded-md border" />
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Referencia rápida de Inyección SQL</p>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
            h1: ({...props}) => <h1 className="text-2xl font-bold mt-6 mb-2" {...props} />,
            h2: ({...props}) => <h2 className="text-xl font-semibold mt-5 mb-2" {...props} />,
            h3: ({...props}) => <h3 className="text-lg font-semibold mt-4 mb-2" {...props} />,
            p: ({...props}) => <p className="text-gray-700 dark:text-gray-300 leading-relaxed my-2" {...props} />,
            a: ({...props}) => <a className="text-sky-600 hover:underline" {...props} />,
            table: ({...props}) => (
              <div className="overflow-x-auto my-4">
                <table className="min-w-full border-collapse" {...props} />
              </div>
            ),
            thead: ({...props}) => <thead className="bg-gray-100 dark:bg-gray-800" {...props} />,
            th: ({...props}) => <th className="px-3 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200 border-b" {...props} />,
            td: ({...props}) => <td className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 border-b" {...props} />,
            ul: ({...props}) => <ul className="list-disc list-inside my-2" {...props} />,
            ol: ({...props}) => <ol className="list-decimal list-inside my-2" {...props} />,
            li: ({...props}) => <li className="my-1" {...props} />,
            blockquote: ({...props}) => (
              <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-300 my-4" {...props} />
            ),
            code: ({inline, children, ...props}) => (
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
