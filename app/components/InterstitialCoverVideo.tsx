"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Parallax from "./Parallax";
import ParallaxProvider from "./ParallaxProvider";
import { ParallaxProps } from "react-scroll-parallax/dist/components/Parallax/types";
// import { ParallaxProps } from "../types/ParallaxProps";
import FullscreenVideo from "./FullscreenVideo";
import ColorChangingText from "./colorChangingText";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import useWindowSize from "../hooks/useWindowSize";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const twConfig = resolveConfig(tailwindConfig);
let whiteColor = (twConfig.theme?.colors?.white as string) ?? "";
let hotPinkColor = (twConfig.theme?.colors?.hotPink as string) ?? "";

type Props = {
  src: string;
  imgAlt?: string;
  imgClassName?: string;
  imgParallax?: ParallaxProps;
  imgParallaxHorizontal?: boolean;
  caption?: string;
  captionClassName?: string;
  captionParallax?: ParallaxProps;
  className?: string;
  children?: React.ReactNode;
};

const InterstitialCoverVideo: React.FC<Props> = ({ ...props }) => {
  let size = useWindowSize();

  const tl = useRef(gsap.timeline());
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      // let q = gsap.utils.selector(containerRef)
      // let b = q('[data-animation-id="video-bg"]')
      // console.log("poooooops", b)

      tl.current = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: 0.25,
          },
        })
        .fromTo(
          '[data-animation-id="video-bg"]',
          { duration: 2.5, opacity: 0 },
          { opacity: 1 },
          3.0
        )
        .to(
          '[data-animation-id="video-text"]',
          { duration: 10, y: `+=${size.height * 0.75}`, ease: "sine.easeOut" },
          0.0
        )
        .fromTo(
          '[data-animation-id="video-text"]',
          { duration: 1.5, color: "#F22E60" },
          { color: "#fafaff" },
          3.0
        )
        .to(
          '[data-animation-id="video-bg"]',
          { duration: 2.5, opacity: 0 },
          5.0
        );
      // return () => {ctx.revert()}
    }, containerRef);
  }, [size.height]);

  return (
    <div
      className={`h-[150%] w-full flex my-0 overflow-hidden relative ${
        props.className ?? ""
      }`}
      ref={containerRef}
    >
      <figure className={`w-full h-full pt-80 fixed -z-10`}>
        <FullscreenVideo
          src={props.src}
          className="w-full h-full fixed top-0 opacity-0 "
          data-animation-id="video-bg"
        />
      </figure>
      <div className={`w-full mx-auto mt-0 relative -z-10 text-white top-0`}>
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b pt-40 from-cloud" />
        <div
          className="mt-0 mb-8 text-4xl max-w-2xl leading-tight mx-auto text-hotPink"
          data-animation-id="video-text"
        >
          {props.children}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-cloud" />
      </div>
    </div>
  );
};

export default InterstitialCoverVideo;
