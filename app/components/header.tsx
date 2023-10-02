'use client'
import Nav from "./nav"
import { useState } from "react"
import { FranklinBold, GaramondDisplay } from './localFonts'
import Logotype from "./logotype"
import Link from "next/link"

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showDonate, setShowDonate] = useState(false)

  function toggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu)
  }

  return (      
    <header id="site-header" className="fixed bg-cloud z-20 w-full h-16 md:h-auto md:py-2 ">
      <div className="md:hidden flex flex-row items-center h-full w-full">
        {/* menu button */}
        <button
          onClick={toggleMobileMenu}
          className=" w-16 h-16 p-3.5 top-0 left-0 absolute"
          role="menu"
        >
          <div className="flex flex-col justify-between h-full w-full px-1 py-2">
            <div className="h-0.5 w-full bg-brown" />
            <div className="h-0.5 w-full bg-brown" />
            <div className="h-0.5 w-full bg-brown" />
          </div>
        </button>

        <Link href="/" className="block  w-full">
          <Logotype
            horizontal
            className="w-1/2 mx-auto fill-brown h-7"
          />
        </Link>
        
        <div className={`top-0 left-0 -z-10 w-screen h-screen filter backdrop-blur-lg ${showMobileMenu ? 'absolute' : 'hidden'}`}>
          {/* mobile menu */}
          <Nav
            className={"w-full h-full bg-cloud/50"}
            ulClassName={`flex flex-col justify-center  h-full text-center text-6xl ${GaramondDisplay.className}`}
            liClassName={`hover:text-hotPink transition-colors my-2`}
            firstItemClassName="hidden"
          />
        </div>


      </div>

      {/* desktop menubar nav */}
      <Nav
        ulClassName={"flex-row hidden md:flex justify-between items-center uppercase tracking-[0.175em] " + FranklinBold.className}
        liClassName="mx-2 mx-4 px-2 hover:text-hotPink transition-colors text-lg text-brown"
        firstItemClassName="ml-1 mr-auto"
        lastItemClassName="ml-auto mr-1 hover:bg-hotPink hover:text-white rounded "
      />
    </header>
  )  
}

export default Header 