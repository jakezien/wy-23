import React from "react"
import Image from "next/image";
import { Parallax } from 'react-scroll-parallax';

enum CaptionSide {
  Left, Right
}

type CaptionedPhotoProps = {
  imageSrc?: string,
  imageAlt?: string,
  caption?: string,
  captionSide?: CaptionSide,
  parallax?: ParallaxProps,
  className?: string,
  children?: React.ReactNode,
}


const CaptionedPhoto: React.FC<CaptionedPhotoProps> = (props) => {
  
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
    <div className={`${props.className} flex mx-auto w-5/6 py-8 my-8 `}>
      {props.captionSide === CaptionSide.Left &&
        <Parallax speed={props.parallax?.speed ?? -20} className="pr-20 flex flex-col justify-center">
          {content}
        </Parallax>
      }
      <div className="w-2/3 overflow-hidden">
          {props.imageSrc && <Image src={props.imageSrc} alt={props.imageAlt ?? ""} className="w-full"/>}
      </div>
      {props.captionSide === CaptionSide.Right &&
        <Parallax speed={props.parallax?.speed ?? -20} className="pl-20 flex flex-col justify-center">
          {content}
        </Parallax>
      }
    </div>
  )
}

export default CaptionedPhoto