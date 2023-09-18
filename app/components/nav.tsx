import Link from "next/link"
import Logotype from "./logotype"

type NavProps = {
  ulClassName?: string
  liClassName?: string
}

const Nav: React.FC<NavProps> = ({
  ulClassName = "",
  liClassName = "list-none"
}) => { 
  return (
    <nav>
      <ul className={ulClassName + " list-none"}>
        <li className={liClassName}>
          <Link href="/">
            <Logotype small={true} className="fill-black w-11 h-8" />
          </Link>
        </li>
        <li className={liClassName}>
          <Link href="/expeditions">Expeditions</Link>
        </li>
        <li className={liClassName}>
          <Link href="/qeros">Q’eros</Link>
        </li>
        <li className={liClassName}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={liClassName}>
          <Link href="/schools">Schools</Link>
        </li>
        <li className={liClassName}>
          <Link href="/journal">Journal</Link>
        </li>
        <li className={liClassName}>
          <Link href="/about">About</Link>
        </li>
        <li className={liClassName}>
          <Link href="/donate" className="block px-3 py-1">Donate</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav