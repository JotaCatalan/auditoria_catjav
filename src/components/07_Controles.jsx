import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import mdRaw from '../../Docs_catjav/07_Controles_catjav.md?raw'
import { ShieldCheck, Lock, Database, Cpu, Key, ShieldAlert } from 'lucide-react'

const ControlCard = ({ icon: Icon, title, subtitle, children }) => (
  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-md bg-sky-50 dark:bg-sky-900">
        <Icon className="w-6 h-6 text-sky-600" />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</div>
      </div>
    </div>
    <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">{children}</div>
  </div>
)

export default function Controles() {
  const lines = mdRaw.split('\n')
  const firstHeadingIndex = lines.findIndex((l) => /^#{1,6}\s+/.test(l))
  let title = 'Controles de Seguridad'
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
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="text-sm text-gray-600 dark:text-gray-300">Medidas preventivas, detectivas y correctivas</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <ControlCard icon={ShieldCheck} title="SQL Injection" subtitle="Prepared statements, WAF, mínimos privilegios">
            Previene la ejecución de consultas SQL maliciosas y reduce el impacto sobre los datos.
          </ControlCard>

          <ControlCard icon={Lock} title="Cross-Site Scripting (XSS)" subtitle="CSP, sanitización, cookies seguras">
            Reduce la posibilidad de ejecución de código en el navegador y protege sesiones.
          </ControlCard>

          <ControlCard icon={ShieldAlert} title="Command Injection" subtitle="Validación, cuentas con mínimos privilegios, EDR">
            Limita la ejecución de comandos arbitrarios en el servidor y detecta comportamiento anómalo.
          </ControlCard>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center gap-2 mb-2"><Database className="w-5 h-5 text-indigo-600" /><strong>Control: Base de Datos</strong></div>
            <div className="text-sm text-gray-700 dark:text-gray-300">Principio de mínimos privilegios, encriptación en reposo y cifrado de backups.</div>
          </div>

          <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center gap-2 mb-2"><Key className="w-5 h-5 text-amber-600" /><strong>Control: Gestión de credenciales</strong></div>
            <div className="text-sm text-gray-700 dark:text-gray-300">Rotación de claves, acceso por roles y MFA para accesos administrativos.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
