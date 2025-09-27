import Link from "next/link";
import Logotype from "./logotype";
import { useDonateModal } from "./DonateProvider";

type NavProps = {
  className?: string;
  ulClassName?: string;
  liClassName?: string;
  firstItemClassName?: string;
  lastItemClassName?: string;
};

const Nav: React.FC<NavProps> = ({
  className = "",
  ulClassName = "",
  liClassName = "list-none",
  firstItemClassName = "",
  lastItemClassName = "",
}) => {
  const { showDonateModal } = useDonateModal();
  return (
    <nav className={className}>
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
          <Link href="/qeros">Q’eros</Link>
        </li>

        <li className={liClassName}>
          <Link href="/projects">Projects</Link>
        </li>

        <li className={liClassName}>
          <Link href="/schools">Schools</Link>
        </li>

        {/*
        <li className={liClassName}>
          <Link href="/">Journal</Link>
        </li>
        */}
        <li className={liClassName}>
          <Link href="/about">About</Link>
        </li>

        <li className={liClassName + " " + lastItemClassName}>
          <button
            onClick={showDonateModal}
            className="block px-3 py-1 cursor-pointer"
          >
            Donate
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
