import React from 'react'

export default async function Template({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
  return (
    <>
      {/* <HeaderMain headerDictionary={dict.header} /> */}
      {children}
      {/* <FooterMain footerDictionary={dict.footer} /> */}
    </>
  )
}
