import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import matrizMarkdown from "../../Docs_catjav/06_Matriz_catjav.md?raw";

export default function Matriz() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <section className="section matrix-card">
        <div className="matrix-header">
          <div>
            <p className="matrix-subtitle">Matriz de riesgo</p>
            <h2 className="matrix-title">Probabilidad vs Impacto</h2>
            <p className="matrix-copy">Visualización de la severidad de los riesgos con una tabla de calor profesional para guiar la priorización.</p>
          </div>
        </div>

        <div className="matrix-visual">
          <div className="matrix-sidebar">
            <span className="matrix-axis-label">Frecuencia</span>
            <div className="matrix-row-labels">
              <span>Altamente probable</span>
              <span>Posible</span>
              <span>Ocasional</span>
              <span>Probable</span>
              <span>Improbable</span>
            </div>
          </div>

          <div className="matrix-grid-wrapper">
            <div className="matrix-column-labels">
              <span></span>
              <span>Muy bajo</span>
              <span>Bajo</span>
              <span>Medio</span>
              <span>Alto</span>
              <span>Crítico</span>
            </div>

            <div className="matrix-grid">
              <div className="matrix-row-label"></div>
              <div className="matrix-cell low">Bajo</div>
              <div className="matrix-cell low">Bajo</div>
              <div className="matrix-cell medium">Medio</div>
              <div className="matrix-cell high">Alto</div>
              <div className="matrix-cell critical">Crítico</div>

              <div className="matrix-row-label"></div>
              <div className="matrix-cell low">Bajo</div>
              <div className="matrix-cell medium">Medio</div>
              <div className="matrix-cell high">Alto</div>
              <div className="matrix-cell critical">Crítico</div>
              <div className="matrix-cell critical">Crítico</div>

              <div className="matrix-row-label"></div>
              <div className="matrix-cell low">Bajo</div>
              <div className="matrix-cell medium">Medio</div>
              <div className="matrix-cell medium">Medio</div>
              <div className="matrix-cell high">Alto</div>
              <div className="matrix-cell critical">Crítico</div>

              <div className="matrix-row-label"></div>
              <div className="matrix-cell low">Bajo</div>
              <div className="matrix-cell low">Bajo</div>
              <div className="matrix-cell medium">Medio</div>
              <div className="matrix-cell medium">Medio</div>
              <div className="matrix-cell high">Alto</div>

              <div className="matrix-row-label"></div>
              <div className="matrix-cell low">Bajo</div>
              <div className="matrix-cell low">Bajo</div>
              <div className="matrix-cell low">Bajo</div>
              <div className="matrix-cell medium">Medio</div>
              <div className="matrix-cell medium">Medio</div>
            </div>
          </div>
        </div>

        <div className="matrix-legend">
          <div className="legend-item">
            <span className="legend-swatch low"></span>
            <span>Muy bajo / Bajo</span>
          </div>
          <div className="legend-item">
            <span className="legend-swatch medium"></span>
            <span>Medio</span>
          </div>
          <div className="legend-item">
            <span className="legend-swatch high"></span>
            <span>Alto</span>
          </div>
          <div className="legend-item">
            <span className="legend-swatch critical"></span>
            <span>Crítico</span>
          </div>
        </div>
      </section>

      <div className="prose prose-slate">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{matrizMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
}