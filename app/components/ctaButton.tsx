import React from "react";
import Link from "next/link";
import { Franklin, GaramondDisplay } from "./localFonts";

interface Props {
  href: string;
  text?: string;
  caption?: string;
  next?: boolean;
  className?: string;
}

const CtaButton: React.FC<Props> = (props) => {
  return (
    <div className={`relative h-44 w-full max-w-xs mx-auto group ${props.className ?? ""}`}>
      <div>
        <div className="h-8">
          {props.next && <em className="mr-1">Next:  </em>}
          <h4
            className={`inline uppercase tracking-[0.15em] ${Franklin.className}`}
          >
            {props.caption}
          </h4>
        </div>

        <Link
          href={props.href}
          className={`${props.className} no-underline hover:text-brown `}
        >
          <h1
            className={
              "my-2 pt-6 pb-3.5 text-7xl tracking-[-0.0125em] border border-current border-x-0 border-spacing-y-0.5 " +
              GaramondDisplay.className
            }
          >
            {props.text}
          </h1>
        </Link>
      </div>

      <div className="absolute top-8 left-0 h-full w-full transition-all duration-300 overflow-hidden max-w-0 group-hover:max-w-full">
        <Link
          href={props.href}
          className={`${props.className} no-underline text-hotPink`}
        >
          <h1
            className={
              "my-2 pt-6 pb-3.5 text-7xl tracking-[-0.0125em] border border-current border-x-0 border-spacing-y-0.5 " +
              GaramondDisplay.className
            }
          >
            {props.text}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CtaButton;
