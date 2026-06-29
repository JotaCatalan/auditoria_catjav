import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import resumenMarkdown from "../../Docs_catjav/01_resumen_catjav.md?raw";

export default function Resumen() {
  return (
    <div className="prose max-w-4xl mx-auto p-6">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ children }) => <div className="table-wrapper overflow-x-auto"><table className="min-w-full">{children}</table></div>,
          th: ({ children }) => <th className="text-left font-semibold py-2 px-3">{children}</th>,
          td: ({ children }) => <td className="py-2 px-3">{children}</td>
        }}
      >
        {resumenMarkdown}
      </ReactMarkdown>
    </div>
  );
}