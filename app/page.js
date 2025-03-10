"use client"
import 'bootstrap/dist/css/bootstrap.css'
import HomepageComp from './components/Homepage'
import ContactCard from './components/ContactCard'



export default function Home () { 
  return (
   <div> 
    <HomepageComp /> 
    <ContactCard /> 
   </div>
  )
}