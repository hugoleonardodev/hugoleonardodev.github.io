import { type MetadataRoute } from 'next'

const baseUrl = 'https://www.rollershub.com'

// export async function generateSitemaps({ params }: { params: { lang: LocalesAvailable } }) {
//   // Fetch the total number of products and calculate the number of sitemaps needed
//   console.log('params.lang', params.lang)
//   return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
// }
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl + '/en-US/',
          es: baseUrl + '/es-ES/',
          pt: baseUrl + '/pt-BR/',
        },
      },
    },
    {
      url: baseUrl + '/group',
      alternates: {
        languages: {
          en: baseUrl + '/en-US/group',
          es: baseUrl + '/es-ES/group',
          pt: baseUrl + '/pt-BR/group',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: baseUrl + '/place',
      alternates: {
        languages: {
          en: baseUrl + '/en-US/place',
          es: baseUrl + '/es-ES/place',
          pt: baseUrl + '/pt-BR/place',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.7,
    },
    {
      url: baseUrl + '/event',
      alternates: {
        languages: {
          en: baseUrl + '/en-US/event',
          es: baseUrl + '/es-ES/event',
          pt: baseUrl + '/pt-BR/event',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.8,
    },
    {
      url: baseUrl + '/map',
      alternates: {
        languages: {
          en: baseUrl + '/en-US/map',
          es: baseUrl + '/es-ES/map',
          pt: baseUrl + '/pt-BR/map',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.6,
    },
    {
      url: baseUrl + '/news',
      alternates: {
        languages: {
          en: baseUrl + '/en-US/news',
          es: baseUrl + '/es-ES/news',
          pt: baseUrl + '/pt-BR/news',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    },
    {
      url: baseUrl + '/about',
      alternates: {
        languages: {
          en: baseUrl + '/en-US/about',
          es: baseUrl + '/es-ES/about',
          pt: baseUrl + '/pt-BR/about',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: baseUrl + '/contact',
      alternates: {
        languages: {
          en: baseUrl + '/en-US/contact',
          es: baseUrl + '/es-ES/contact',
          pt: baseUrl + '/pt-BR/contact',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: baseUrl + '/terms-and-conditions',
      alternates: {
        languages: {
          en: baseUrl + '/en-US/terms-and-conditions',
          es: baseUrl + '/es-ES/terms-and-conditions',
          pt: baseUrl + '/pt-BR/terms-and-conditions',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: baseUrl + '/privacy',
      alternates: {
        languages: {
          en: baseUrl + '/en-US/privacy',
          es: baseUrl + '/es-ES/privacy',
          pt: baseUrl + '/pt-BR/privacy',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ]
}
