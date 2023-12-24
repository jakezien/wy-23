import './globals.css'
import Header from "./components/header"
import DonateModal from './donate/page'
import Footer from "./components/footer"
import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({subsets: ['latin'], style:['normal', 'italic']})

export const metadata = {
  title: 'Willka Yachay',
  description: 'Willka Yachay',
}

type Props = {
  searchParams: Record<string, string> | null | undefined
}

export default function RootLayout({
  children, props
}: {
    children: React.ReactNode,
    props: Props
}) {
  return (

    <html lang="en" className='w-full h-full'>
      <body className={'w-full h-full ' + garamond.className + ' text-brown'}>        
        <main className='w-full h-full'>
          <Header />
          {children}
          { props && props.searchParams?.donate && <DonateModal/> } 
          <Footer/>
        </main>
      </body>
    </html>
  )
}
