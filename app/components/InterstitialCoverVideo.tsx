'use client'
import React from "react"
import Image, { StaticImageData } from "next/image";
import Parallax from './Parallax';
import ParallaxProvider from './ParallaxProvider';
import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types";
// import { ParallaxProps } from "../types/ParallaxProps";
import FullscreenVideo from "./FullscreenVideo";
import ColorChangingText from "./colorChangingText";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import useWindowSize from "../hooks/useWindowSize";
const twConfig = resolveConfig(tailwindConfig)
let whiteColor = twConfig.theme?.colors?.white as string ?? ""
let hotPinkColor = twConfig.theme?.colors?.hotPink as string ?? ""


type Props = {
  src: string,
  imgAlt?: string,
  imgClassName?: string,
  imgParallax?: ParallaxProps,
  imgParallaxHorizontal?: boolean,
  caption?: string,
  captionClassName?: string,
  captionParallax?: ParallaxProps,
  className?: string,
  children?: React.ReactNode,
}


const InterstitialCoverVideo: React.FC<Props> = ({
  ...props
}) => {  
  let size = useWindowSize()
            
  return (
  <div className={`h-[150%] w-full flex overflow-hidden relative ${props.className ?? ""}`}>
    <figure className={`w-full h-full z-0 absolute`}>   
      <Parallax parallaxProps={{
        speed: -50,
        rootMargin: {top:-size.height/2, bottom:size.height/2, left:0, right:0},
        opacity: [0,1]
      }}>
        <FullscreenVideo src={props.src} className="fixed w-full h-full " />
      </Parallax>
    </figure>
    <div className={`w-full mx-auto relative z-10 text-white top-12`}>
      <ParallaxProvider>
          <Parallax parallaxProps={{
            easing: "easeOutQuad",
            rootMargin: {top:-size.height/3, bottom:0, left:0, right:0},
            translateY: ["0%", "350%"]
          }}>
          
            
            <div className="mt-0 mb-8 text-4xl max-w-2xl leading-tight mx-auto text-hotPink">
              {props.children}
              
            </div>
          
        </Parallax>
      </ParallaxProvider>
    </div>
  </div>
  )
}

export default InterstitialCoverVideo