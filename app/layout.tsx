import './globals.css'
import Header from "./components/header"
import Footer from "./components/footer"
import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({subsets: ['latin'], style:['normal', 'italic']})

export const metadata = {
  title: 'Willka Yachay',
  description: 'Willka Yachay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" className='w-full h-full'>
      <body className={'w-full h-full ' + garamond.className + ' text-brown'}>        
        <main className='w-full h-full'>
          <Header />
            {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
