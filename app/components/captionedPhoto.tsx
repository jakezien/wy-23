"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import useWindowSize from "../hooks/useWindowSize";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type CaptionedPhotoProps = {
  imgSrc?: string | StaticImageData;
  imgAlt?: string;
  imgClassName?: string;
  imgParallaxH?: boolean;
  caption?: string;
  captionLeft?: boolean;
  captionClassName?: string;
  className?: string;
  children?: React.ReactNode;
  delayPhoto?: boolean;
};

const CaptionedPhoto: React.FC<CaptionedPhotoProps> = ({
  captionLeft = false,
  ...props
}) => {
  const tl = useRef(gsap.timeline());
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      tl.current.clear();
      tl.current = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 0.25,
        },
      });

      // tl.current.to(
      //   '[data-animation-id="caption-text"]',
      //   { duration: 10, yPercent:10}
      // );

      if (props.delayPhoto) {
        tl.current.fromTo(
          '[data-animation-id="caption-img"]',
          { duration: 5.0, opacity: 0, ease: "easeOut" },
          { opacity: 1 },
          0
        );
      }

      if (props.imgParallaxH) {
        tl.current.fromTo(
          '[data-animation-id="caption-img"]',
          { duration: 10.0, objectPosition:"35% 50%" },
          { objectPosition: "45% 50%" },          
          0
        );

      }

    }, containerRef);
  }, [containerRef, props.imgParallaxH, props.delayPhoto]);

  return (
    <div
      className={`md:flex mx-auto w-full md:px-16 my-[28rem] h-[55%]  ${props.className}`}
      ref={containerRef}
    >
      <div className="w-full overflow-hidden">
        {props.imgSrc && (
          <div className="h-full ">
            <Image
              data-animation-id="caption-img"
              src={props.imgSrc}
              alt={props.imgAlt ?? ""}
              width={1200}
              height={1200}
              className={"w-full h-full object-cover " + props.imgClassName}
            />
          </div>
        )}
      </div>

      <div
        data-speed={200}
        data-animation-id="caption-text"
        className={`
          flex flex-col justify-top leading-snug 
          ${captionLeft ? "order-first md:pr-20 " : ""} 
          ${props.captionClassName}
        `}
      >
        <div className="max-w-xs my-0 mx-1 ">
          {props.children ? props.children : <p>{props.caption}</p>}
        </div>
      </div>
    </div>
  );
};

export default CaptionedPhoto;
