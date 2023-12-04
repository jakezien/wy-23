'use client'
import { PropsWithChildren, Ref, useEffect, useRef } from "react"
import { Franklin } from "./localFonts"
import useWindowSize from "../hooks/useWindowSize"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

interface Props {
  title: string
  slug: string
  videoContainerRef: React.RefObject<HTMLElement>
  className?: string
}

const ProjectsSection: React.FC<PropsWithChildren<Props>> = ({ title, slug, videoContainerRef, className, children }) => {

  let size = useWindowSize();
  const tl = useRef(gsap.timeline());
  const containerRef = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 0.25,
          // snap: [0.5]
          
        },
      })

      // pause
      // start
      // fade in


      // nothing


      // fade out
      // start
      // pause

      
      
      tl.current.call(() => {
        let q = gsap.utils.selector(videoContainerRef)
        const els = q(`[data-animation-id="video-${slug}"] * video`)
        if (els.length > 0) {
          let video = els[0] as HTMLVideoElement
          video.pause()
        }
      }, [], 0)

      tl.current.call(() => {
        let q = gsap.utils.selector(videoContainerRef)
        const els = q(`[data-animation-id="video-${slug}"] * video`)
        if (els.length > 0) {
          let video = els[0] as HTMLVideoElement
          video.play()
        }
      }, [], 0.1)
      
      
      tl.current.to(`[data-animation-id="video-${slug}"]`, {
        opacity: 1,
        duration: 1
      }, 0)




      tl.current.to("*", {
        duration: 1
      }, 2)

      tl.current.to(`[data-animation-id="video-${slug}"]`, {
        filter: "blur(80px)",
        duration: 1
      }, 1)

      tl.current.to(`[data-animation-id="section-title-${slug}"]`, {
        y: size.height * 1,
        duration: 3,
        ease: "easeInOut"
      }, 1)

      tl.current.to(`[data-animation-id="text-${slug}"]`, {
        opacity: 0,
        duration: 1
      }, 3)



      tl.current.call(() => {
        let q = gsap.utils.selector(videoContainerRef)
        const els = q(`[data-animation-id="video-${slug}"] * video`)
        if (els.length > 0) {
          let video = els[0] as HTMLVideoElement
          video.play()
        }
      }, [], 3.9)

      tl.current.call(() => {
        let q = gsap.utils.selector(videoContainerRef)
        const els = q(`[data-animation-id="video-${slug}"] * video`)
        if (els.length > 0) {
          let video = els[0] as HTMLVideoElement
          video.pause()
        }
      }, [], 4.0)
      

    }, videoContainerRef);
      
    return () => {
      tl.current.scrollTrigger?.disable()
      tl.current.clear
      ctx.revert()
      console.log("return from useeffect")
    }

  }, [slug, size.height, videoContainerRef, containerRef]);



  return (
    <section
      className="h-full min-h-screen w-full my-40 py-24 px-4 md:px-24 flex flex-col justify-between text-white"
      ref={containerRef}
      data-animation-id={`text-${slug}`}
    >
      <div className="h-full mb-[50rem] text-center">
        <h2 className={`${Franklin.className} + text-4xl uppercase tracking-[0.1em] mt-16`}
        data-animation-id={`section-title-${slug}`}
      >
          {title}
        </h2>
      </div>
      <div className="h-full min-h-screen">
        {children}
      </div>
    </section>
  )
}

export default ProjectsSection