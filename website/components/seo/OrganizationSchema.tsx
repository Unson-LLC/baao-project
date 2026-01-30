export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BAAO 実戦AI道場",
    "alternateName": "BAAO道場",
    "url": "https://baao-dojo.com",
    "logo": "https://baao-dojo.com/images/logo.png",
    "description": "無料稽古で空気を掴み、月謝で型を得て、師範が伴随して四半期で成果を公開する。役割別の稽古ガイドと師範コミュニティ案内を備えた常設サイト。",
    "sameAs": [
      "https://twitter.com/baao_dojo",
      "https://www.youtube.com/@baao-dojo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": "Japanese",
      "url": "https://baao-dojo.com/join"
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
