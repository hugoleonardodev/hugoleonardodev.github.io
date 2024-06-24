import { Flowbite, ThemeModeScript } from 'flowbite-react'
import React from 'react'
import { Inter, Roboto_Mono } from 'next/font/google'
import { type Metadata } from 'next'
import { type LocalesAvailable, getDictionary } from '@/functions/getDictionary'
import { MyHeader } from '@/components/header'

import '../../app/[lang]/globals.css'
import Head from 'next/head'
import { MyFooter } from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['500'],
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['500'],
})

const customTheme = {
  theme: {
    button: {
      color: {
        primary: 'bg-purple-600 hover:bg-purple-700 text-white',
      },
    },
    navbar: {
      link: {
        base: 'block py-2 pl-3 pr-4 md:p-0',
        active: {
          on: 'bg-purple-700 text-white dark:text-white md:bg-transparent md:text-purple-700',
          off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-purple-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
        },
        disabled: {
          on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
          off: '',
        },
      },
    },
    pagination: {
      base: '',
      layout: {
        table: {
          base: 'text-sm text-gray-700 dark:text-gray-400',
          span: 'font-semibold text-gray-900 dark:text-white',
        },
      },
      pages: {
        selector: {
          active:
            'bg-purple-50 text-purple-600 hover:bg-purple-100 hover:text-purple-700 dark:border-gray-700 dark:bg-[#1C1917] dark:text-white',
        },
      },
    },
    timeline: {
      item: {
        point: {
          marker: {
            icon: {
              base: 'h-3 w-3 text-purple-600 dark:text-purple-300 ',
              wrapper:
                'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-gray-200 dark:bg-[#E11D48] dark:ring-pink-900',
            },
          },
        },
      },
    },
    datepicker: {
      popup: {
        root: {
          base: 'absolute top-10 z-50 block pt-2',
          inline: 'relative top-0 z-auto',
          inner: 'inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-[#1C1917]',
        },
        footer: {
          button: {
            base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-purple-300',
            today: 'bg-purple-700 text-white hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700',
          },
        },
      },
      views: {
        days: {
          items: {
            item: {
              selected: 'bg-purple-700 text-white hover:bg-purple-600',
            },
          },
        },
        months: {
          items: {
            item: {
              selected: 'bg-purple-700 text-white hover:bg-purple-600',
            },
          },
        },
        years: {
          items: {
            item: {
              selected: 'bg-purple-700 text-white hover:bg-purple-600',
            },
          },
        },
        decades: {
          items: {
            item: {
              selected: 'bg-purple-700 text-white hover:bg-purple-600',
            },
          },
        },
      },
    },
  },
}

export async function generateStaticParams(): Promise<
  Array<{
    lang: string
  }>
> {
  return [{ lang: 'en-US' }, { lang: 'en-GB' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: LocalesAvailable }
}): Promise<React.JSX.Element> {
  const { navigation } = await getDictionary(params.lang) // en

  return (
    <Flowbite theme={customTheme}>
      <html lang={params.lang}>
        <Head>
          <ThemeModeScript />
        </Head>

        <body
          className={`${inter.variable} ${robotoMono.variable} md:px-8 lg:px-16 xl:px-32 bg-gray-100 dark:bg-[#1C1917] dark:text-gray-400 dark:border-gray-600 `}
        >
          <MyHeader navigationDictionary={navigation} />
          <main className="flex items-start sm:items-start justify-center p-4 sm:p-8 gap-8">{children}</main>
          <MyFooter navigationDictionary={navigation} />
        </body>
      </html>
    </Flowbite>
  )
}

export const metadata: Metadata = {
  title: 'Rollers Hub',
  description: 'Connecting rollers all around the world',
}
