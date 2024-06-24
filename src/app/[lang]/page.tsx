import React from 'react'
import { type Metadata, type ResolvingMetadata } from 'next'
import { type LocalesAvailable, getDictionary } from '@/functions/getDictionary'
import AboutSection from '@/components/about'
import { WorkingExperience } from '@/components/working'
import ProjectsList from '@/components/projects'
import TechnologiesList from '@/components/technologies'
import Contacts from '@/components/contacts'

interface Props {
  params: { id: string; lang: LocalesAvailable }
  searchParams: Record<string, string | string[] | undefined>
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    metadataBase: new URL('https://www.rollershub.com'),
    generator: 'Rollers Hub',
    applicationName: 'Rollers Hub',
    referrer: 'origin-when-cross-origin',
    keywords: ['Patins', 'Onde Patinar', 'Mapa da Patinação', 'Grupos', 'Eventos', 'Notícias', 'Rollers Hub'],
    authors: [{ name: 'Rollers Hub', url: 'https://www.rollershub.com' }],
    creator: 'Rollers Hub',
    publisher: 'Rollers Hub',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    // alternates: {
    //   canonical: '/',
    //   languages: {
    //     'en-US': '/en-US',
    //     'de-DE': '/de-DE',
    //   },
    // },
    title: 'Rollers Hub',
    description: 'Rollers Hub - Conectando patinadores do mundo todo',
    // robots: {
    //   index: false,
    //   follow: true,
    //   nocache: true,
    //   googleBot: {
    //     index: true,
    //     follow: false,
    //     noimageindex: true,
    //     'max-video-preview': -1,
    //     'max-image-preview': 'large',
    //     'max-snippet': -1,
    //   },
    // },
    openGraph: {
      title: 'Rollers Hub',
      description: 'Rollers Hub - Conectando patinadores do mundo todo',
      url: 'https://www.rollershub.com/' + params.lang,
      siteName: 'Rollers Hub',
      images: [
        // {
        //   url: imageUrl, // Must be an absolute URL
        //   width: 800,
        //   height: 600,
        //   alt: 'My custom alt',
        //   type: 'image/jpeg',
        // },
        {
          url: '/assets/en-home-thumb-resized.png', // Must be an absolute URL
          width: 1200,
          height: 600,
          alt: 'Rollers Hub - Logo',
          type: 'image/png',
        },
        // {
        //   url: imageUrl, // Must be an absolute URL
        //   width: 1920,
        //   height: 1080,
        //   alt: 'My custom alt',
        //   type: 'image/jpeg',
        // },
        // {
        //   url: imageUrl, // Must be an absolute URL
        //   width: 1800,
        //   height: 1600,
        //   alt: 'My custom alt',
        //   type: 'image/jpeg',
        // },
      ],
      locale: params.lang,
      type: 'article',
    },
  }
}

export default async function Home({ params }: { params: { lang: LocalesAvailable } }): Promise<React.JSX.Element> {
  const { aboutMe, workingExperiences, personalProjects, technologiesAndTools, contacts } = await getDictionary(
    params.lang,
  ) // en

  return (
    <main className="flex flex-col md:flex lg:flex xl:flex">
      <AboutSection aboutMeDictionary={aboutMe} />
      <ProjectsList projectsDictionary={personalProjects} />
      <WorkingExperience workingExperienceDictionary={workingExperiences} />
      <TechnologiesList technologiesDictionary={technologiesAndTools} />
      <Contacts contactsDictionary={contacts} />
    </main>
  )
}
