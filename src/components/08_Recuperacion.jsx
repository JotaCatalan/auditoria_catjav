import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import mdRaw from '../../Docs_catjav/08_Recuperacion_catjav.md?raw'

const featureCards = [
  {
    icon: '🛡️',
    title: 'WAF',
    subtitle: 'Web Application Firewall',
    description: 'Bloquea ataques como SQLi, XSS y Command Injection antes de que lleguen a la aplicación.'
  },
  {
    icon: '🔑',
    title: 'MFA',
    subtitle: 'Autenticación Multifactor',
    description: 'Agrega una segunda capa de seguridad para reducir el riesgo de credenciales robadas.'
  },
  {
    icon: '⚡',
    title: 'SIEM',
    subtitle: 'Monitoreo centralizado',
    description: 'Detecta y correlaciona eventos en tiempo real para una respuesta temprana.'
  },
  {
    icon: '🗄️',
    title: 'Backups',
    subtitle: 'Respaldos periódicos',
    description: 'Guarda copias en ubicaciones separadas y verifica restauraciones regularmente.'
  },
  {
    icon: '🖥️',
    title: 'Redundancia',
    subtitle: 'Infraestructura adicional',
    description: 'Mantiene servicios disponibles cuando falla el servidor principal.'
  },
  {
    icon: '📄',
    title: 'Protocolos',
    subtitle: 'Plan de recuperación',
    description: 'Define pasos claros, roles y comunicación para restaurar el servicio rápidamente.'
  }
]

export default function Recuperacion() {
  const lines = mdRaw.split('\n')
  const firstHeadingIndex = lines.findIndex((l) => /^#{1,6}\s+/.test(l))
  let title = 'Recuperación ante Desastres'
  let content = mdRaw
  if (firstHeadingIndex !== -1) {
    const headingLine = lines[firstHeadingIndex]
    title = headingLine.replace(/^#{1,6}\s+/, '').trim() || title
    lines.splice(firstHeadingIndex, 1)
    content = lines.join('\n')
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Una guía visual de medidas de resiliencia y recuperación para MercadoSur.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-3 py-2 text-sm font-medium dark:bg-sky-950/40 dark:text-sky-300">
              <span aria-hidden className="inline-block">🛡️</span> Seguridad Perimetral
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-3 py-2 text-sm font-medium dark:bg-emerald-950/40 dark:text-emerald-300">
              <span aria-hidden className="inline-block">🔑</span> Protección de Acceso
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {featureCards.map((card) => {
            return (
              <div key={card.title} className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 shadow-sm hover:-translate-y-0.5 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-2xl bg-sky-600/10 p-3 text-sky-600 dark:bg-sky-400/10 dark:text-sky-300">
                    <span aria-hidden className="inline-block">{card.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{card.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{card.description}</p>
              </div>
            )
          })}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
