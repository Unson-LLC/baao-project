export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BAAO 実戦AI道場",
    "alternateName": "BAAO道場",
    "url": "https://dojo.baao.or.jp",
    "logo": "https://dojo.baao.or.jp/images/logo.png",
    "description": "AI導入の失敗を防ぎ、四半期で具体的な成果を出すための「実戦AI道場」。",
    "sameAs": [
      "https://twitter.com/baao_dojo",
      "https://www.youtube.com/@baao-dojo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": "Japanese",
      "url": "https://dojo.baao.or.jp/join"
    },
    "areaServed": "JP",
    "founder": {
      "@type": "Person",
      "name": "BAAO"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
