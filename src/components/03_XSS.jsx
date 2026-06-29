import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import xssMarkdown from "../../Docs_catjav/03_XSS_catjav.md?raw";
import xssImage from "../../Docs_catjav/img_catjav/xss_catjav.PNG";

export default function XSS() {
  return (
    <div className="max-w-4xl mx-auto p-6 prose">

      {/* Markdown del informe */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{xssMarkdown}</ReactMarkdown>

      {/* Imagen del ataque XSS */}
      <div className="mt-6">
        <h3>Demostración del ataque Cross-Site Scripting (XSS)</h3>

        <img
          src={xssImage}
          alt="XSS demo"
          className="rounded-lg shadow-lg border"
        />
      </div>

    </div>
  );
}