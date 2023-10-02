import React from "react"
import Image, { StaticImageData } from "next/image";
import Parallax from './Parallax';
import { ParallaxProps } from "../types/ParallaxProps";

export enum CaptionSide {
  Left, Right
}

type CaptionedPhotoProps = {
  imageSrc?: string | StaticImageData,
  imageAlt?: string,
  caption?: string,
  captionSide?: CaptionSide,
  parallax?: ParallaxProps,
  className?: string,
  children?: React.ReactNode,
  parallaxH?: boolean,
}


const CaptionedPhoto: React.FC<CaptionedPhotoProps> = ({ captionSide = CaptionSide.Right, ...props }) => {
  let content = (
    <div className="max-w-xs my-0 mx-1">
      {props.children ? props.children : <p>{props.caption}</p>}
    </div>
  )
            
  // let parallaxProps = {}
  // if (props.parallaxDirection == ParallaxDirection.Horizontal) 
    // parallaxProps.translateX = [5, -5]
  // else 
    // parallaxProps.translateY = [-15, 15]

  return (
    <div className={`md:flex mx-auto w-full md:p-8 my-8 ${props.className}`}>
      
      
      <div className="md:w-2/3 overflow-hidden">
        {props.imageSrc &&
          <Parallax
            parallaxProps={{ speed: props.parallax?.speed ?? 5 }}
            className="h-full h-[800px]"
          >
            <Image
              src={props.imageSrc}
              alt={props.imageAlt ?? ""}
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
          </Parallax>
        }
      </div>

      <Parallax
        parallaxProps={{ speed: props.parallax?.speed ?? -5 }}
        className={`
          px-4 flex flex-col justify-center text-lg leading-snug 
          ${captionSide == CaptionSide.Left ? 'order-first md:pr-20 ' : 'md:pl-20'}

        `}
      >
        {content}
      </Parallax>

    </div>
  )
}

export default CaptionedPhoto