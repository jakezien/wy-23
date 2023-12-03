'use client'
import { CldVideoPlayer, CldVideoPlayerProps } from "next-cloudinary"
import useWindowSize from "../hooks/useWindowSize"
import 'next-cloudinary/dist/cld-video-player.css';
import { useRef } from "react";

interface Props {
  src: string
  className?: string
  paused?: boolean
}


const FullscreenVideo: React.FC<Props> = ({src, className, paused=false, ...props}) => {
  let size = useWindowSize()
  let ref = useRef<HTMLVideoElement>(null)

  return (
    <div className={"fullscreen-video bg-cloud " + className} {...props}>
      <CldVideoPlayer
        src={src}
        width={size.width}
        height={size.height}      
        autoPlay={paused ? "false" : "always"}
        loop={true}
        muted={true}
        controls={false}
        videoRef={ref}
        bigPlayButton={false}
        preload="auto"
    />
    </div>
  )
}


export default FullscreenVideo

