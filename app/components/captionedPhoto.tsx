import React from "react"
import Image, { StaticImageData } from "next/image";
import Parallax from './Parallax';
import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types";
// import { ParallaxProps } from "../types/ParallaxProps";

export enum CaptionSide {
  Left, Right
}

type CaptionedPhotoProps = {
  imgSrc?: string | StaticImageData,
  imgAlt?: string,
  imgClassName?: string,
  imgParallax?: ParallaxProps,
  imgParallaxHorizontal?: boolean,
  caption?: string,
  captionSide?: CaptionSide,
  captionClassName?: string,
  captionParallax?: ParallaxProps,
  className?: string,
  children?: React.ReactNode,
}


const CaptionedPhoto: React.FC<CaptionedPhotoProps> = ({
  captionSide = CaptionSide.Right,
  imgParallax = { speed: 0 },
  imgParallaxHorizontal = false,
  captionParallax = { speed: 0 },
  ...props
}) => {
  let content = (
    <div className="max-w-xs my-0 mx-1 ">
      {props.children ? props.children : <p>{props.caption}</p>}
    </div>
  )
            
  // let parallaxProps = {}
  // if (props.parallaxDirection == ParallaxDirection.Horizontal) 
    // parallaxProps.translateX = [5, -5]
  // else 
    // parallaxProps.translateY = [-15, 15]

  return (
    <div className={`md:flex mx-auto w-full md:px-16 my-[28rem] h-[55%]  ${props.className}`}>
      <div className="w-full overflow-hidden">
        {props.imgSrc &&
          <Parallax
            horizontal={imgParallaxHorizontal}
            parallaxProps={imgParallax}
            className="h-full"
          >
            <Image
              src={props.imgSrc}
              alt={props.imgAlt ?? ""}
              width={1200}
              height={1200}
              className={"w-full h-full object-cover " + props.imgClassName}
            />
          </Parallax>
        }
      </div>

      <Parallax
        parallaxProps={captionParallax}
        className={`
          flex flex-col justify-top leading-snug 
          ${captionSide == CaptionSide.Left ? 'order-first md:pr-20 ' : ''} 
          ${props.captionClassName}
        `}
      >
        {content}
      </Parallax>

    </div>
  )
}

export default CaptionedPhoto