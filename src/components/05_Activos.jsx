import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import mdRaw from '../../Docs_catjav/05_Activos_catjav.md?raw'

export default function Activos() {
  const lines = mdRaw.split('\n')
  const firstHeadingIndex = lines.findIndex((l) => /^#{1,6}\s+/.test(l))
  let title = 'Activos'
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
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
