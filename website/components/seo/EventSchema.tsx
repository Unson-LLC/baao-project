export default function EventSchema() {
  const weeklyKeiko = {
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
    "image": "https://dojo.baao.or.jp/images/hero/main2.png",
    "organizer": {
      "@type": "Organization",
      "name": "BAAO 実戦AI道場",
      "url": "https://dojo.baao.or.jp"
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

  const slideSeminar = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "3時間の苦痛が15分の快感に！AIで「白いスライド」に悩む時間をゼロにする無料オンラインセミナー",
    "description": "初心者必見！AIを使いこなして資料作成の苦痛をゼロにする生存戦略を伝授。ChatGPTやGeminiを「頼りになる相談相手」に変え、プロ級のスライドを短時間で作成する方法を学びます。",
    "startDate": "2026-02-25T19:30:00+09:00",
    "endDate": "2026-02-25T20:30:00+09:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://baao-aidojo.peatix.com"
    },
    "image": "https://dojo.baao.or.jp/images/hero/main2.png",
    "organizer": {
      "@type": "Organization",
      "name": "BAAO 実戦AI道場",
      "url": "https://dojo.baao.or.jp"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY",
      "availability": "https://schema.org/InStock",
      "url": "https://baao-aidojo.peatix.com",
      "validFrom": new Date().toISOString()
    },
    "performer": {
      "@type": "Organization",
      "name": "実践AI道場"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weeklyKeiko) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(slideSeminar) }}
      />
    </>
  );
}
