"use client";
import Image, { StaticImageData } from "next/image";
import useWindowSize from "../hooks/useWindowSize";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface CoverPhotoProps {
  imgSrc?: string | StaticImageData;
  imgAlt?: string;
  className?: string;
  fullHeight?: boolean;
  bg?: React.ReactNode;
  children?: React.ReactNode;
  caption?: string;
  fixed?: boolean;
}

const CoverPhoto: React.FC<CoverPhotoProps> = (props) => {
  let size = useWindowSize();

  const tl = useRef(gsap.timeline());
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scrub: 0.25,
        },
      });

      if (props.fixed) {
        tl.current
          .fromTo(
            '[data-animation-id="cover-bg"]',
            { duration: 8, opacity: 1, y: "2.5%" },
            { opacity: 0, y: "-2.5%" }
          )
          .to('[data-animation-id="cover-text"]', {
            start:0,
            duration: 10,
            y: `+=${size.height * 0.75}`,
            ease: "sine.easeOut",
          });
        
          tl.current.call(() => {
            let q = gsap.utils.selector(containerRef)
            const els = q(`[data-animation-id="cover-bg"] * video`)
            if (els.length > 0) {
              let video = els[0] as HTMLVideoElement
              video.play()
              console.log("play " + els)
            }
          }, [], 1.9)

        tl.current.call(() => {
            let q = gsap.utils.selector(containerRef)
            const els = q(`[data-animation-id="cover-bg"] * video`)
            if (els.length > 0) {
              let video = els[0] as HTMLVideoElement
              video.pause()
              console.log("pause " + els)
            }
          }, [], 2)
    
      }
    }, containerRef);
  }, [size.height, containerRef, props.fixed]);

  return (
    <div
      ref={containerRef}
      className={`${props.className ?? ""} 
      w-full flex overflow-hidden relative  
      ${props.fullHeight ? "h-screen" : "h-[90vh]"} 
    `}
    >
      <figure
        className={`w-full h-full -z-10 ${props.fixed ? "fixed" : "absolute"}`}
        data-animation-id="cover-bg"
      >
        {props.bg ? (
          props.bg
        ) : (
          <Image
            src={props.imgSrc ?? ""}
            alt={props.imgAlt ?? ""}
            width={2000}
            height={2000}
            className="h-[105vh] -top-[2.5%] relative object-cover"
          />
        )}
      </figure>
      <div
        data-animation-id="cover-text"
        className={`w-full m-auto relative z-10 text-white top-12`}
      >
        {props.children ? props.children : <p>{props.caption}</p>}
      </div>
    </div>
  );
};

export default CoverPhoto;
