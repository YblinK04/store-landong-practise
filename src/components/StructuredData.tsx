export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ytech.com/#local-business',
    name: 'AuraTech - Премиум электроника',
    image: 'https://ytech.com/og-image.jpg',
    description: 'Инновационная электроника премиум-класса. Умные гаджеты, аудиотехника и современные технологии.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Технологическая, 42',
      addressLocality: 'Москва',
      postalCode: '123456',
      addressCountry: 'RU'
    },
   
    url: 'https://ytech.com',
    telephone: '+7 (800) 555-35-35',
    openingHours: ['Mo-Su 09:00-21:00'],
    priceRange: '₽₽₽',
    sameAs: [
      'https://facebook.com/ytech',
      'https://instagram.com/ytech',
      'https://twitter.com/ytech'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}