import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'

export const metadata = { 
  title: 'Contact List', 
  description: 'React App Contact List'
}




export default function RootLayout ({children}) { 
  return ( 
    <html lang="en"> 
    <body> 
      <nav className="navbar navbar-expand-lg navbar-light"> 
        <div className="container-fluid"> 
          <ul className="navbar-nav "> 
            <li  className="nav-item"> 
              <Link href='/' className='nav-link '>HOME</Link>
            </li>
            <li className="nav-item"> 
              <Link href='/contacts' className='nav-link'> CONTACTS</Link>
            </li>
            <Link href='/contacts/new' className='nav-link'> ADD CONTACT</Link>
          </ul>
        </div>
      </nav>
      {children}
    </body>

    </html>
  )
}