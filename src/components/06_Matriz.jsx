import ReactMarkdown from "react-markdown";
import matrizMarkdown from "../../Docs_catjav/06_Matriz_catjav.md?raw";

export default function Matriz() {
  return (
    <div className="max-w-5xl mx-auto p-6 prose prose-slate">

      {/* Título / contenido completo del informe */}
      <ReactMarkdown>{matrizMarkdown}</ReactMarkdown>

    </div>
  );
}