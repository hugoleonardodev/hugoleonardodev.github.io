'use client'
import { Footer } from 'flowbite-react'
import React from 'react'

interface MyFooterProps {
  navigationDictionary: Array<{
    title: string
    href: string
  }>
}

export function MyFooter({ navigationDictionary }: MyFooterProps): JSX.Element {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <a href="#navbar">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">hugoleonardodev</span>
          </a>

          <Footer.LinkGroup>
            {navigationDictionary.map(link => (
              <Footer.Link href={link.href} key={link.href}>
                {link.title}
              </Footer.Link>
            ))}
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#navbar" by="hugoleonardodev" year={new Date().getFullYear()} />
      </div>
    </Footer>
  )
}
