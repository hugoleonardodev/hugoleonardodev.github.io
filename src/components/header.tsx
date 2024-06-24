'use client'
import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'

interface MyHeaderProps {
  navigationDictionary: Array<{
    title: string
    href: string
  }>
}

export function MyHeader({ navigationDictionary }: MyHeaderProps): React.JSX.Element {
  React.useEffect(() => {
    const toggleButton = document.getElementById('header-navbar-toggle')
    if (toggleButton?.lastChild != null) {
      toggleButton.removeChild(toggleButton.lastChild)
      const avatar = document.createElement('img')
      avatar.src = '/assets/hugo-leonardo.jpeg'
      avatar.alt = 'Hugo Leonardo - Full Stack Developer'
      avatar.className = 'w-12 h-12 rounded-full'
      toggleButton.appendChild(avatar)
    }
  }, [])
  return (
    <Navbar fluid rounded id="navbar">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">hugoleonardodev</span>
      </NavbarBrand>

      <NavbarToggle id="header-navbar-toggle" />

      <NavbarCollapse>
        {navigationDictionary.map(link => (
          <NavbarLink href={link.href} key={link.href}>
            {link.title}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  )
}
