import ReactMarkdown from "react-markdown";
import promptMarkdown from "../../Docs_catjav/09_Prompts_catjav.md?raw";

export default function Prompt() {
  return (
    <div className="max-w-5xl mx-auto p-6 prose prose-slate">

      {/* Render del Markdown */}
      <ReactMarkdown>{promptMarkdown}</ReactMarkdown>

    </div>
  );
}