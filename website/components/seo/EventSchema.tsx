export default function EventSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "週次稽古｜AIニュースと最新ケースの分解",
    "description": "毎週木曜の無料稽古で道場の空気を体感。前半35分は基礎編で今週押さえたいAIニュースを解説し、後半25分は応用編でAI導入に役立つ実践的な知見を深掘りします。",
    "startDate": new Date().toISOString().split('T')[0] + "T19:30:00+09:00",
    "endDate": new Date().toISOString().split('T')[0] + "T20:30:00+09:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w"
    },
    "image": "https://baao-dojo.com/images/hero/main2.png",
    "organizer": {
      "@type": "Organization",
      "name": "BAAO 実戦AI道場",
      "url": "https://baao-dojo.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY",
      "availability": "https://schema.org/InStock",
      "url": "https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w",
      "validFrom": new Date().toISOString()
    },
    "performer": {
      "@type": "Person",
      "name": "BAAO Field Director"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
