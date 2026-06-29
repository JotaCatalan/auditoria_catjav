import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import comandosMarkdown from "../../Docs_catjav/04_Comandos_catjav.md?raw";
import comandosImage from "../../Docs_catjav/img_catjav/comandos_catjav.PNG";

export default function Comandos() {
  return (
    <div className="max-w-4xl mx-auto p-6 prose">

      {/* Contenido Markdown */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{comandosMarkdown}</ReactMarkdown>

      {/* Imagen del ataque */}
      <div className="mt-6">
        <h3>Demostración de Command Injection</h3>

        <img
          src={comandosImage}
          alt="Command Injection demo"
          className="rounded-lg shadow-lg border"
        />
      </div>

    </div>
  );
}