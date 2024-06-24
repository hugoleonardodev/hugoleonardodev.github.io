import React from 'react'

interface AboutMeProps {
  aboutMeDictionary: {
    id: string
    title: string
    name: string
    description: string
    hello: string
    p1: string
    p2: string
    p3: string
    p4: string
    p5: string
    regards: string
    signature: string
  }
}
function AboutSection({ aboutMeDictionary }: AboutMeProps): React.JSX.Element {
  return (
    <section className="w-full flex flex-col bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div id={aboutMeDictionary.id}>
        <h1 className="px-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {aboutMeDictionary.title}
        </h1>
        <h2 className="px-2 text-xl font-bold tracking-tight text-gray-600 dark:text-gray-300">
          {aboutMeDictionary.name} - {aboutMeDictionary.description}
        </h2>
        <p className="px-2 mt-4 text-gray-500 dark:text-gray-400">{aboutMeDictionary.hello}</p>
        <div className="flex flex-col gap-8 items-center sm:flex-row">
          <div>
            <img src="/assets/home1.png" alt="home" className="min-w-96 sm:rounded-2xl" />
          </div>
          <div>
            <p className="indent-8 ml-2 sm:ml-0 mb-8 sm:mb-0 text-gray-500 dark:text-gray-400">
              {aboutMeDictionary.p1}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center sm:flex-row">
          <div className="w-96 sm:order-2">
            <img src="/assets/home2.png" alt="home" className="min-w-96 sm:rounded-2xl" />
          </div>
          <p className="indent-8 ml-2 sm:ml-0 mb-8 sm:mb-0 text-gray-500 dark:text-gray-400">{aboutMeDictionary.p2}</p>
        </div>
        <div className="flex flex-col gap-8 items-center sm:flex-row">
          <div className="w-96">
            <img src="/assets/home3.png" alt="home" className="min-w-96 sm:rounded-2xl" />
          </div>
          <p className="indent-8 ml-2 sm:ml-0 mb-8 sm:mb-0 text-gray-500 dark:text-gray-400">{aboutMeDictionary.p3}</p>
        </div>
        {/* <p className="px-2 mt-4 text-gray-500 dark:text-gray-400">{aboutMeDictionary.p2}</p>
        <p className="px-2 mt-4 text-gray-500 dark:text-gray-400">{aboutMeDictionary.p3}</p>
        <p className="px-2 mt-4 text-gray-500 dark:text-gray-400">
          Recentemente, passei os últimos meses trabalhando em um projeto pessoal full-stack. Sou patinador nas horas
          vagas. E percebi que não havia nenhum website legal sobre patins. Todos que haviam eram horriveis ou então
          eram apenas lojas para vender patins. Então decidi escrever um aplicativo para conectar patinadores ao redor
          do mundo.{' '}
          <a
            href="https://www.rollershub.com"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 hover:underline"
          >
            Rollers Hub
          </a>{' '}
          é um site que construi com ajuda de uma comunidade de patinadores. Vou implementando novas funcionalidades
          quando tiver algum tempo livre. Estou procurando uma posição como desenvolvedor web full-stack. Me sinto bem
          programando e quero seguir em frente com minha carreira como desenvolvedor.
        </p> */}
      </div>
    </section>
  )
}

export default AboutSection
