import { ParallaxProvider } from 'react-scroll-parallax'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
