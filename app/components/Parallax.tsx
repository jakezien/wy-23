'use client'
import { PropsWithChildren } from "react"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types"


interface Props {
  className?: string,
  horizontal?: boolean,
  parallaxProps: ParallaxProps,
}

const WyParallax: React.FC<PropsWithChildren<Props>> = ({className, horizontal = false, parallaxProps, children}) => {

  return (
    <ParallaxProvider
      scrollAxis={horizontal ? "horizontal" : "vertical"}
    >
        <Parallax className={className} {...parallaxProps} >
          {children}
        </Parallax>
      </ParallaxProvider>
  )
}

export default WyParallax