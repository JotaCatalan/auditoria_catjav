import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import recuperacionMarkdown from "../../Docs_catjav/08_Recuperacion_catjav.md?raw";

export default function Recuperacion() {
  return (
    <div className="max-w-5xl mx-auto p-6 prose prose-slate">

      {/* Render del Markdown */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{recuperacionMarkdown}</ReactMarkdown>

    </div>
  );
}