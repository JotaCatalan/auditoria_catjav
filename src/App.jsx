import Resumen from './components/01_Resumen.jsx'
import InyeccionSQL from './components/02_InyeccionSQL.jsx'
import XSS from './components/03_XSS.jsx'
import Comandos from './components/04_Comandos.jsx'
import Activos from './components/05_Activos.jsx'
import Matriz from './components/06_Matriz.jsx'
import Controles from './components/07_Controles.jsx'
import Recuperacion from './components/08_Recuperacion.jsx'
import Prompt from './components/09_prompt.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Auditoría de seguridad</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Informe técnico de auditoría para MercadoSur</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Conjunto de hallazgos, análisis y medidas de mitigación que documentan los riesgos más relevantes, la arquitectura de activos y el plan de recuperación operativa.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
        <section id="resumen" className="space-y-6">
          <Resumen />
        </section>

        <section id="inyeccion-sql" className="space-y-6">
          <InyeccionSQL />
        </section>

        <section id="xss" className="space-y-6">
          <XSS />
        </section>

        <section id="comandos" className="space-y-6">
          <Comandos />
        </section>

        <section id="activos" className="space-y-6">
          <Activos />
        </section>

        <section id="matriz" className="space-y-6">
          <Matriz />
        </section>

        <section id="controles" className="space-y-6">
          <Controles />
        </section>

        <section id="recuperacion" className="space-y-6">
          <Recuperacion />
        </section>

        <section id="prompts" className="space-y-6">
          <Prompt />
        </section>
      </main>
    </div>
  )
}

export default App