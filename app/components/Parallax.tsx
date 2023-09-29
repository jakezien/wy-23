'use client'
import { PropsWithChildren } from "react"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types"


interface Props {
  className?: string
  parallaxProps: ParallaxProps,
}

const WyParallax: React.FC<PropsWithChildren<Props>> = ({className, parallaxProps, children}) => {

  return (
      <ParallaxProvider>
        <Parallax className={className} {...parallaxProps} >
          {children}
        </Parallax>
      </ParallaxProvider>
  )
}

export default WyParallax