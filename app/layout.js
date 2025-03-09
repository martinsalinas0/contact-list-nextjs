import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Conact List',
  description: 'contact list',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <nav> 

        
      <ul> 
        <li> <Link href='/'>Homepage</Link> </li>
        <li>
          <Link href='/contacts'>Contacts Page</Link> </li>
        <li> Add Contact</li>
        <li> HOmepage</li>

      </ul></nav>
      </body>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
