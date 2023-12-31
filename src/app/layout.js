
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fitri HY',
  description: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
	  <head>
        <link rel='icon' href='/hero.gif' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
