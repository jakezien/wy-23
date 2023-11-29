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
        },
      })

      tl.current.to(`[data-animation-id="video-${slug}"]`, {
        opacity: 1,
        duration: 1
      }, 0)

    }, videoContainerRef);
  }, [slug, videoContainerRef, containerRef]);



  return (
    <section className="h-full w-full my-40 py-24 px-24 flex flex-col justify-between bg-slate-100 bg-opacity-5" ref={containerRef}>
      <h2 className={`${Franklin.className} + text-4xl uppercase tracking-[0.1em] mt-16`}>{title}</h2>
      <div>
        {children}
        </div>
    </section>
  )
}

export default ProjectsSection