import Image from "next/image";
import LogotypeSvg from "../../public/svg/logotype.svg"
import LogotypeSmallSvg from "../../public/svg/logotype-small.svg"
import LogotypeHorizontalSvg from "../../public/svg/logotype-h.svg"

type LogotypeProps = {
  horizontal?: boolean;
  small?: boolean;
  className?: string;
};

const Logotype: React.FC<LogotypeProps> = ({
  horizontal = false,
  small = false,
  className = ""
}) => {
  return <Image src={horizontal ? LogotypeHorizontalSvg : small ? LogotypeSmallSvg : LogotypeSvg}
    alt="Willka Yachay logo"
    className={className}
  />
};

export default Logotype;