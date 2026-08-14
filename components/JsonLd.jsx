/**
 * Renders one or more schema.org objects as a single JSON-LD script tag.
 * Server component — the markup ships in the initial HTML, which is what
 * crawlers read.
 */
const JsonLd = ({ schema }) => {
  const payload = Array.isArray(schema) ? schema : [schema];

  return (
    <script
      type="application/ld+json"
      // Schema objects are authored in this repo, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
};

export default JsonLd;
