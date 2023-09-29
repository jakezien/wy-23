'use client'
import Nav from "./nav"
import { useState } from "react"


const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  function toggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu)
  }

  return (      
    <header id="site-header">
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>Menu</button>
        <div className={showMobileMenu ? 'block' : 'hidden'}>
          <Nav ulClassName="flex flex-col"/>
        </div>
      </div>
      <Nav ulClassName="flex-row hidden md:flex"/>
    </header>
  )  
}

export default Header 