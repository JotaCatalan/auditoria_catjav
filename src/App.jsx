import './App.css'
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
    <main className="app-shell">
      <aside className="page-index" aria-label="Índice de navegación">
        <div className="page-index__header">
          <span>Índice</span>
        </div>
        <nav className="page-index__nav">
          <a href="#resumen">Resumen</a>
          <a href="#sqli">SQL Injection</a>
          <a href="#xss">XSS</a>
          <a href="#comandos">Comandos</a>
          <a href="#activos">Activos</a>
          <a href="#matriz">Matriz</a>
          <a href="#controles">Controles</a>
          <a href="#recuperacion">Recuperación</a>
          <a href="#prompts">Prompts</a>
        </nav>
      </aside>

      <div className="page-content">
        <section id="resumen">
          <Resumen />
        </section>

        <section id="sqli" className="mt-10">
          <InyeccionSQL />
        </section>

        <section id="xss" className="mt-10">
          <XSS />
        </section>

        <section id="comandos" className="mt-10">
          <Comandos />
        </section>

        <section id="activos" className="mt-10">
          <Activos />
        </section>

        <section id="matriz" className="mt-10">
          <Matriz />
        </section>

        <section id="controles" className="mt-10">
          <Controles />
        </section>

        <section id="recuperacion" className="mt-10">
          <Recuperacion />
        </section>

        <section id="prompts" className="mt-10">
          <Prompt />
        </section>

        <div className="ticks"></div>
        <section id="spacer"></section>
      </div>
    </main>
  )
}

export default App
