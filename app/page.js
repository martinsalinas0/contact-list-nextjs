"use client"
import 'bootstrap/dist/css/bootstrap.css'
import HomepageComp from './components/Homepage'
import ContactCard from './components/ContactCard'
import AddContactForm from './components/AddContactForm'
import ContactList from './contacts/page'



export default function Home () { 
  return (
   <div> 
    <HomepageComp /> 
    <ContactList />
   </div>
  )
}