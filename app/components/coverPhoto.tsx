import Image from 'next/image';
// import { Parallax } from 'react-scroll-parallax';


type CoverPhotoProps = {
  imgSrc?: string,
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

const CoverPhoto: React.FC<CoverPhotoProps> = (props) => {
  return (
    <div className={`${props.className} 
      w-full flex overflow-hidden relative
      ${props.fullHeight ? 'h-screen' : 'h-[90vh]'} 
    `}>
      <div className={`w-full m-auto relative z-10 text-white top-12 text-lg`}>
        {props.children ? props.children : <p>{props.caption}</p>}
      </div>
      <figure className={`w-full h-full z-0 ${props.fixed ? 'fixed' : 'absolute'}`}>
        {props.scrim ? <div className="w-full h-full absolute bg-white z-[1]" /> : ""}
        {props.bg ? props.bg :
          // <Parallax {...props.parallax}>
            <Image src={props.imgSrc ?? ""} alt={props.imgAlt ?? ""} className="h-screen"></Image>
          // </Parallax>
        }
      </figure>
    </div>
  )
}

export default CoverPhoto