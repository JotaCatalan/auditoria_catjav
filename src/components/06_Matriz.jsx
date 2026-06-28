import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import mdRaw from '../../Docs_catjav/06_Matriz_catjav.md?raw'
// removed lucide-react icons; using lightweight spans/emoji instead

const colorFor = (code) => {
  // B: Bajo (verde), M: Medio (amarillo), A: Alto (naranja), C: Crítico (rojo)
  switch (code) {
    case 'B':
      return 'bg-emerald-500'
    case 'M':
      return 'bg-yellow-400'
    case 'A':
      return 'bg-orange-500'
    case 'C':
      return 'bg-red-500'
    default:
      return 'bg-gray-200'
  }
}

const matrix = [
  // Row 5 (Impacto 5 -> Crítico)
  ['M','A','A','C','C'],
  // Row 4
  ['B','M','A','A','C'],
  // Row 3
  ['B','M','M','A','A'],
  // Row 2
  ['B','B','M','M','A'],
  // Row 1 (Impacto 1 -> Muy Bajo)
  ['B','B','B','M','M']
]

export default function Matriz() {
  const lines = mdRaw.split('\n')
  const firstHeadingIndex = lines.findIndex((l) => /^#{1,6}\s+/.test(l))
  let title = 'Matriz de Riesgo'
  let content = mdRaw
  if (firstHeadingIndex !== -1) {
    const headingLine = lines[firstHeadingIndex]
    title = headingLine.replace(/^#{1,6}\s+/, '').trim() || title
    lines.splice(firstHeadingIndex, 1)
    content = lines.join('\n')
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 text-sky-600" aria-hidden>📊</span>
            <h2 className="text-2xl font-semibold">{title}</h2>
          </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 bg-emerald-500 rounded-sm" /> Bajo</div>
            <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 bg-yellow-400 rounded-sm" /> Medio</div>
            <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 bg-orange-500 rounded-sm" /> Alto</div>
            <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 bg-red-500 rounded-sm" /> Crítico</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-5 h-5 text-sky-600" aria-hidden>📈</span>
              <div className="text-sm text-gray-600 dark:text-gray-300">Mapa de Calor (Probabilidad × Impacto)</div>
            </div>

            <div className="overflow-x-auto">
              <div className="flex">
                {/* Left labels (Frecuencia) */}
                <div className="flex flex-col justify-between mr-3" style={{height: 240}}>
                  <span className="text-sm">Altamente probable</span>
                  <span className="text-sm">Posible</span>
                  <span className="text-sm">Ocasional</span>
                  <span className="text-sm">Probable</span>
                  <span className="text-sm">Improbable</span>
                </div>

                {/* Matrix grid */}
                <div>
                  <div className="grid grid-cols-5 gap-3">
                    {matrix.map((row, rIdx) => (
                      row.map((cell, cIdx) => (
                        <div key={`${rIdx}-${cIdx}`} className={`w-24 h-12 rounded-md ${colorFor(cell)} flex items-center justify-center text-white font-semibold`}>{cell}</div>
                      ))
                    ))}
                  </div>

                  {/* Impacto labels */}
                  <div className="flex justify-between mt-3 text-sm text-center text-gray-700 dark:text-gray-300">
                    <span className="w-24">Muy bajo</span>
                    <span className="w-24">Bajo</span>
                    <span className="w-24">Medio</span>
                    <span className="w-24">Alto</span>
                    <span className="w-24">Crítico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3"><span className="w-5 h-5 text-amber-500" aria-hidden>⚠️</span><strong>Leyenda</strong></div>
              <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="inline-block w-3 h-3 mr-2 align-middle bg-emerald-500 rounded-sm" /> Bajo (B)</li>
                <li><span className="inline-block w-3 h-3 mr-2 align-middle bg-yellow-400 rounded-sm" /> Medio (M)</li>
                <li><span className="inline-block w-3 h-3 mr-2 align-middle bg-orange-500 rounded-sm" /> Alto (A)</li>
                <li><span className="inline-block w-3 h-3 mr-2 align-middle bg-red-500 rounded-sm" /> Crítico (C)</li>
              </ul>
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                <span className="inline-block mr-2" aria-hidden>ℹ️</span> Colores basados en el mapa proporcionado.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 prose dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
