import Image, { StaticImageData } from 'next/image';
import Parallax from './Parallax';
import ParallaxProvider from './ParallaxProvider'
import { ParallaxProps } from 'react-scroll-parallax/dist/components/Parallax/types';

interface CoverPhotoProps {
  imgSrc?: string | StaticImageData,
  imgAlt?: string,
  className?: string,
  fullHeight?: boolean,
  parallax?: ParallaxProps,
  bg?: React.ReactNode,
  scrim?: boolean
  children?: React.ReactNode,
  caption?: string,
  fixed?: boolean,
}

const CoverPhoto: React.FC<CoverPhotoProps> = ({ parallax = {
  startScroll: 0,
  endScroll: 600,
  speed: 4
}, ...props }) => {
  return (
    <div className={`${props.className ?? ""} 
      w-full flex overflow-hidden relative
      ${props.fullHeight ? 'h-screen' : 'h-[90vh]'} 
    `}>
      <figure className={`w-full h-full z-0 ${props.fixed ? 'fixed' : 'absolute'}`}>
        
          
        <Parallax parallaxProps={parallax} >
          {props.bg ? props.bg :
            <Image
              src={props.imgSrc ?? ""}
              alt={props.imgAlt ?? ""}
              width={2000}
              height={2000}
              className="h-screen object-cover"
            />
          }
          </Parallax>
          
        {props.scrim && <div className="w-full h-full absolute bg-white z-[1]" />}
      </figure>
      <div className={`w-full m-auto relative z-10 text-white top-12`}>
        {props.children ? props.children : <p>{props.caption}</p>}
      </div>
    </div>
  )
}

export default CoverPhoto