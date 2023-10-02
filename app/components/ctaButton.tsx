import React from "react"
import Link from "next/link"

interface Props {
  href: string,
  text?: string,
  caption?: string,
  next?: boolean,
  className?: string
}

const CtaButton: React.FC<Props> = (props) => {
  return (      
    <div className="mb-4">
      {props.next && <span>Next: </span>}
      <h4 style={{display: "inline"}}>{props.caption}</h4>
      <Link href={props.href} className={`${props.className} no-underline hover:text-hotPink`}>
        <h1 className="my-2 py-4 text-6xl tracking-tight border border-current border-x-0 border-y-[1]">{props.text}</h1>
      </Link>
    </div>

  )  
}

export default CtaButton