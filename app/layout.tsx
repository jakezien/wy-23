import './globals.css'
import Header from "./components/header"
import Footer from "./components/footer"
import { EB_Garamond } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'

const garamond = EB_Garamond({subsets: ['latin']})

// export const metadata = {
//   title: 'Willka Yachay',
//   description: 'Willka Yachay',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" className='h-full'>
      <body className={'h-full ' + garamond.className}>        
        <Header/>
        <main className='h-full'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
