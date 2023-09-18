import Link from "next/link"
import Logotype from "./logotype"

const Nav = () => {
  return (
    <nav className="px-1 py-0.5 fixed z-40 w-full bg-cloud">
      <ul className="w-full flex justify-between items-center list-none font-franklin uppercase tracking-[0.2em] font-normal">
        <li className="mx-4 my-2 self-start">
          <Link href="/">
            <Logotype small={true} className="fill-black w-11 h-8" />
          </Link>
        </li>
        <div className="flex justify-center items-center">
          <li className="mx-4 my-0"><Link href="/expeditions">Expeditions</Link></li>
          <li className="mx-4 my-0"><Link href="/qeros">Q’eros</Link></li>
          <li className="mx-4 my-0"><Link href="/projects">Projects</Link></li>
          <li className="mx-4 my-0"><Link href="/schools">Schools</Link></li>
          <li className="mx-4 my-0"><Link href="/journal">Journal</Link></li>
          <li className="mx-4 my-0"><Link href="/about">About</Link></li>
        </div>
        <li className="mx-4 my-0 border rounded-sm border-darkBrown"><Link href="/donate" className="block px-3 py-1">Donate</Link></li>
      </ul>
    </nav>
  )
}

export default Nav