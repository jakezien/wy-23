"use client";
import useWindowSize from "../hooks/useWindowSize";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

import skyImage from "./sky2x.jpg";
import topImage from "./top2xNew.jpg";
import tentsImage from "./tents2x.jpg";
import PageTitle from "../components/pageTitle";

const ExpeditionsCover = () => {
  const size = useWindowSize();
  const tl = useRef(gsap.timeline());
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scrub: 0.25,
        },
      });
      tl.current.to('[data-animation-id="sky"]', {y:0.08 * size.height, ease:"power0.easeOut", duration:5}, 0);
      tl.current.to('[data-animation-id="mountains"]', {y:0.06 * size.width, ease:"power2.easeOut", duration:5}, 0);
      tl.current.from('[data-animation-id="title"]', { y: -0.0375 * size.height, ease: "power0.easeIn", duration: 5 }, 0);
      tl.current.from('[data-animation-id="subtitle"]', {y:-0.0125 * size.height, ease:"power0.easeIn", duration:5}, 0);
      tl.current.from('[data-animation-id="tents"]', { y:0.0125 * size.height, ease: "power0.easeIn", duration: 5 }, 0);
    }, containerRef);
  }, [size.height, containerRef]);


  return (
    <div className="relative h-full md:h-[80vh]" ref={containerRef}>
      <div className="w-full h-full">
        
        <Image
          alt=""
          src={skyImage}
          className="w-full h-full object-cover object-bottom"
          width="1200"
          height="1200"
          data-animation-id="sky"
        />
        
        <div className="absolute w-full h-full flex flex-col justify-center -top-12 md:top-0 left-0" data-animation-id="title">
          <PageTitle title="Expeditions" className="text-cloud"></PageTitle>
        </div>
        
        <Image
          alt=""
          src={topImage}
          className="expeditions-mountain-mask w-full"
          width="1200"
          height="1200"
          data-animation-id="mountains"
        />

        <div className="absolute w-full h-full flex flex-col justify-center top-16 md:top-24" data-animation-id="subtitle">
          <p className="text-cloud max-w-2xl w-5/6 mx-auto mt-28 md:mt-16 text-center text-xl">
            In partnership with Q’ero families, Willka Yachay offers expeditions
            to individuals and groups who appreciate the Q’eros, support their
            sustainable development, seek a strong intercultural connection
            with&nbsp;them, and wish to learn from their teachings.
          </p>
        </div>

        <Image
          data-animation-id="tents"
          alt="A starry sky framed by mountains. At the base of the mountains, several tents glow from lanterns lit within."
          src={tentsImage}
          className="w-full absolute left-0 bottom-0 lg:-bottom-[2rem] object-bottom expeditions-tent-mask"
          // className="w-full absolute left-0 right-0 bottom-[3vh] object-bottom expeditions-tent-mask"
          width="1200"
          height="1200"
        />

      </div>
    </div>
  );
};

export default ExpeditionsCover;
