'use client'
import Nav from "./nav"
import { useState } from "react"
import localFont from "next/font/local"


const franklin = localFont({src: '../fonts/FranklinBold.woff2'}) 

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showDonate, setShowDonate] = useState(false)

  function toggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu)
  }

  return (      
    <header id="site-header" className="md:fixed bg-cloud z-20 w-full p-2">
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>Menu</button>
        <div className={showMobileMenu ? 'block' : 'hidden'}>
          <Nav
            ulClassName="flex flex-col"
          />
        </div>
      </div>
      <Nav
        ulClassName={"flex-row hidden md:flex justify-between items-center uppercase tracking-[0.1em] " + franklin.className}
        liClassName="mx-2 mx-4 lg:mx-8 px-2 hover:text-hotPink transition-colors text-lg text-brown"
        firstItemClassName="ml-1 mr-auto"
        lastItemClassName="ml-auto mr-1 hover:bg-hotPink hover:text-white rounded "
      />
    </header>
  )  
}

export default Header 