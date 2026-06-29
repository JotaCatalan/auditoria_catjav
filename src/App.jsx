import "./App.css";

import Resumen from "./components/01_Resumen";
import InyeccionSQL from "./components/02_InyeccionSQL";
import XSS from "./components/03_XSS";
import Comandos from "./components/04_Comandos";
import Activos from "./components/05_Activos";
import Matriz from "./components/06_Matriz";
import Controles from "./components/07_controles";
import Recuperacion from "./components/08_Recuperacion";
import Prompt from "./components/09_prompt";

function App() {
  return (
    <div className="app-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h1>Auditoría MercadoSur</h1>

        <a className="nav-link" href="#resumen">Resumen</a>
        <a className="nav-link" href="#sqli">SQL Injection</a>
        <a className="nav-link" href="#xss">XSS</a>
        <a className="nav-link" href="#cmd">Command Injection</a>
        <a className="nav-link" href="#activos">Activos</a>
        <a className="nav-link" href="#matriz">Matriz de Riesgo</a>
        <a className="nav-link" href="#controles">Controles</a>
        <a className="nav-link" href="#recuperacion">Recuperación</a>
        <a className="nav-link" href="#prompts">Prompts</a>
      </aside>

      {/* CONTENIDO */}
      <main className="content">

        <section id="resumen" className="section accent">
          <Resumen />
        </section>

        <section id="sqli" className="section danger">
          <InyeccionSQL />
        </section>

        <section id="xss" className="section soft">
          <XSS />
        </section>

        <section id="cmd" className="section danger">
          <Comandos />
        </section>

        <section id="activos" className="section">
          <Activos />
        </section>

        <section id="matriz" className="section">
          <Matriz />
        </section>

        <section id="controles" className="section">
          <Controles />
        </section>

        <section id="recuperacion" className="section">
          <Recuperacion />
        </section>

        <section id="prompts" className="section">
          <Prompt />
        </section>

      </main>
    </div>
  );
}

export default App;