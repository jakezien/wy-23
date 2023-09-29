import './globals.css'
import Header from "./components/header"
import Footer from "./components/footer"
import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({subsets: ['latin']})

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
    
    <html lang="en" className=''>
      <body className={garamond.className}>        
        <main>
          <Header />
            {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
