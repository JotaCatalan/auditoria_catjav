import ReactMarkdown from "react-markdown";
import sqliMarkdown from "../../Docs_catjav/02_SQLI_catjav.md?raw";
import sqliImage from "../../Docs_catjav/img_catjav/sqli_catjav.PNG";

export default function InyeccionSQL() {
  return (
    <div className="max-w-4xl mx-auto p-6 prose">

      {/* Título Markdown */}
      <ReactMarkdown>{sqliMarkdown}</ReactMarkdown>

      {/* Imagen del ataque */}
      <div className="mt-6">
        <h3>Demostración del ataque SQL Injection</h3>

        <img
          src={sqliImage}
          alt="SQL Injection demo"
          className="rounded-lg shadow-lg border"
        />
      </div>

    </div>
  );
}