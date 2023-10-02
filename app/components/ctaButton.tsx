import React from "react"
import Link from "next/link"
import { Franklin, GaramondDisplay } from "./localFonts"

interface Props {
  href: string,
  text?: string,
  caption?: string,
  next?: boolean,
  className?: string
}

const CtaButton: React.FC<Props> = (props) => {
  return (      
    <div className={"ml-2 mb-4"}>
      {props.next &&
        <span>Next: </span>
      }
      <h4 className={`inline uppercase tracking-[0.15em] ${Franklin.className}`}>
        {props.caption}
      </h4>
      <Link href={props.href} className={`${props.className} no-underline hover:text-hotPink`}>
        <h1 className={
          "my-2 pt-6 pb-3.5 text-7xl tracking border border-current border-x-0 border-spacing-y-0.5 " +
          GaramondDisplay.className
        }>
          {props.text}
        </h1>
      </Link>
    </div>

  )  
}

export default CtaButton