import Link from "next/link"
import Logotype from "./logotype"

type NavProps = {
  ulClassName?: string
  liClassName?: string
  firstItemClassName?: string
  lastItemClassName?: string
}

const Nav: React.FC<NavProps> = ({
  ulClassName = "",
  liClassName = "list-none",
  firstItemClassName = "",
  lastItemClassName = ""
}) => { 
  return (
    <nav>
      <ul className={ulClassName + " list-none"}>
        <li className={liClassName + " " + firstItemClassName}>
          <Link href="/">
            <Logotype small={true} className="fill-black w-11 h-8" />
          </Link>
        </li>
        <li className={liClassName}>
          <Link href="/expeditions">Expeditions</Link>
        </li>
        <li className={liClassName}>
          <Link href="/">Q’eros</Link>
        </li>
        <li className={liClassName}>
          <Link href="/">Projects</Link>
        </li>
        <li className={liClassName}>
          <Link href="/">Schools</Link>
        </li>
        <li className={liClassName}>
          <Link href="/">Journal</Link>
        </li>
        <li className={liClassName}>
          <Link href="/">About</Link>
        </li>
        <li className={liClassName + " " + lastItemClassName}>
          <Link href="/" className="block px-3 py-1">Donate</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav