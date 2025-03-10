"use client"
import 'bootstrap/dist/css/bootstrap.css'
import HomepageComp from './components/Homepage'
import ContactCard from './components/ContactCard'
import AddContactForm from './components/AddContactForm'



export default function Home () { 
  return (
   <div> 
    <HomepageComp /> 
    <AddContactForm /> 
   </div>
  )
}