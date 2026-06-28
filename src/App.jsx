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

export default function App() {
	return (
		<div className="app-shell">
			<header className="app-header">
				<div className="app-header__content">
					<span className="app-header__icon" aria-hidden>🛡️</span>
					<div>
						<p className="app-header__eyebrow">Auditoría de Seguridad</p>
						<h1 className="app-header__title">Informe final de auditoría</h1>
						<p className="app-header__subtitle">Unidad 3 · TI3034 · Fundamentos de Seguridad de la Información</p>
					</div>
				</div>
			</header>

			<main className="app-main">
				<section id="resumen" className="app-card app-card--section app-card--fullwidth">
					<div className="app-card-inner">
						<Resumen />
					</div>
				</section>

				<section id="inyeccion-sql" className="app-card app-card--section app-card--fullwidth">
					<div className="app-card-inner">
						<InyeccionSQL />
					</div>
				</section>

				<section id="xss" className="app-card app-card--section app-card--fullwidth">
					<div className="app-card-inner">
						<XSS />
					</div>
				</section>

				<section id="comandos" className="app-card app-card--section app-card--fullwidth">
					<div className="app-card-inner">
						<Comandos />
					</div>
				</section>

				<section id="activos" className="app-card app-card--section">
					<Activos />
				</section>

				<section id="matriz" className="app-card app-card--section app-card--fullwidth">
					<div className="app-card-inner">
						<Matriz />
					</div>
				</section>

				<section id="controles" className="app-card app-card--section app-card--fullwidth">
					<div className="app-card-inner">
						<Controles />
					</div>
				</section>

				<section id="recuperacion" className="app-card app-card--section app-card--fullwidth">
					<div className="app-card-inner">
						<Recuperacion />
					</div>
				</section>

				<section id="prompts" className="app-card app-card--section app-card--fullwidth">
					<div className="app-card-inner">
						<Prompt />
					</div>
				</section>
			</main>

			<footer className="app-footer">
				<span>Estudiante: [Nombre completo]</span>
				<span>Docente: Rubén Schnettler · INACAP Valparaíso</span>
			</footer>
		</div>
	)
}
