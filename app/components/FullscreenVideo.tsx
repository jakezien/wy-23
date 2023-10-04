'use client'
import { CldVideoPlayer, CldVideoPlayerProps } from "next-cloudinary"
import useWindowSize from "../hooks/useWindowSize"
import 'next-cloudinary/dist/cld-video-player.css';
import { useRef } from "react";

interface Props {
  src: string
}


const FullscreenVideo: React.FC<Props> = ({src}) => {
  let size = useWindowSize()
  console.log(size)
  let ref = useRef<HTMLVideoElement>(null)



  return (
    <div className="fullscreen-video bg-cloud">
    <CldVideoPlayer
        src={src}
        width={size.width}
        height={size.height}
      
      autoPlay="always"
      loop={true}
      muted={true}
        controls={false}
        videoRef={ref}
        bigPlayButton={false}
        playsInline={true}
    />
    </div>
  )
}


export default FullscreenVideo

