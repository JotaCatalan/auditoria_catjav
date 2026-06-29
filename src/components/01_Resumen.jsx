import resumenMarkdown from "../../Docs_catjav/01_resumen_catjav.md?raw";

export default function Resumen() {
  return (
    <div className="prose max-w-4xl mx-auto p-6">
      <pre className="whitespace-pre-wrap">{resumenMarkdown}</pre>
    </div>
  );
}