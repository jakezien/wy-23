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
          snap: [0.5]
          
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
      }, [], 0.01)
      tl.current.call(() => {
        let q = gsap.utils.selector(videoContainerRef)
        const els = q(`[data-animation-id="video-${slug}"] * video`)
        if (els.length > 0) {
          let video = els[0] as HTMLVideoElement
          video.pause()
        }
      }, [], 0.011)
      
      tl.current.call(() => {
        let q = gsap.utils.selector(videoContainerRef)
        const els = q(`[data-animation-id="video-${slug}"] * video`)
        if (els.length > 0) {
          let video = els[0] as HTMLVideoElement
          video.play()
        }
      }, [], 1)
      
      tl.current.to(`[data-animation-id="video-${slug}"]`, {
        opacity: 1,
        duration: 1
      }, 0)




      tl.current.to("*", {
        duration: 1
      }, 2)


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
  }, [slug, videoContainerRef, containerRef]);



  return (
    <section
      className="h-full min-h-screen w-full my-40 py-24 px-24 flex flex-col justify-between text-white"
      ref={containerRef}
      data-animation-id={`text-${slug}`}
    >
      <h2 className={`${Franklin.className} + text-4xl uppercase tracking-[0.1em] mt-16`}>{title}</h2>
      <div>
        {children}
      </div>
    </section>
  )
}

export default ProjectsSection