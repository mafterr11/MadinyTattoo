export default function sitemap() {
    return [
      {
        url: 'https://madinytattoo.ro/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://madinytattoo.ro/despre',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://madinytattoo.ro/servicii',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://madinytattoo.ro/servicii/tatuaje',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://madinytattoo.ro/servicii/micropigmentare',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://madinytattoo.ro/servicii/laser',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://madinytattoo.ro/proiecte',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://madinytattoo.ro/testimoniale',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://madinytattoo.ro/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
    ]
  }