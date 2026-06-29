import ReactMarkdown from "react-markdown";
import activosMarkdown from "../../Docs_catjav/05_Activos_catjav.md?raw";

export default function Activos() {
  return (
    <div className="max-w-5xl mx-auto p-6 prose prose-slate">

      {/* Contenido del Markdown */}
      <ReactMarkdown>{activosMarkdown}</ReactMarkdown>

    </div>
  );
}