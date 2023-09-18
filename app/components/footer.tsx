import Logotype from "./logotype"
import Social from "./social"

const Footer = () => {
  return (      
    <footer className="relative z-1 bg-brown text-clay px-4 pt-4 pb-4">
      <div className="max-w-3xl mx-auto">
      <div className="flex flex-row justify-between align-top mb-4">
        <Logotype className="fill-[rgb(192,129,122)] h-12"/>
        <div>
          <Social />
        </div>
      </div>
        <div className="">
          <p className="m-0 leading-tight opacity-80">© {new Date().getFullYear()} Willka Yachay.</p>
          <p className="opacity-80">Willka Yachay is a Peruvian NGO with a partner US 501c3.</p>
          {/* Photographs by Hannah Porst.
          Video courtesy of <a href="http://www.kidnectedworld.com" target="_blank">Kidnected World.</a> 
          Website by Jake Zien. */}
        </div>
      </div>
    </footer>
  )  
}

export default Footer