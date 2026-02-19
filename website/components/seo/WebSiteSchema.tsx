export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BAAO 実戦AI道場",
    "url": "https://dojo.baao.or.jp",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dojo.baao.or.jp/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
