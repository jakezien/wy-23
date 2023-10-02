import { GaramondDisplay } from "./localFonts"

interface Props {
  title: string
}

const PageTitle: React.FC<Props> = ({title}) => {
  return (
    <h1 className={
      "text-title tracking-tight text-center "
      + GaramondDisplay.className
    }>
      {title}
    </h1>
  )
}

export default PageTitle