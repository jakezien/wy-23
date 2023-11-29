import { GaramondDisplay } from "./localFonts"

interface Props {
  title: string
  className?: string
}

const PageTitle: React.FC<Props> = ({title, className}) => {
  return (
    <h1 className={
      "text-title tracking-tight text-center "
      + GaramondDisplay.className + " " + className ?? ""
    }>
      {title}
    </h1>
  )
}

export default PageTitle