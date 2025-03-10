


'use client'
import { useParams } from "next/navigation"
import Link from "next/link"

import ContactCard from "@/app/components/ContactCard";


export default function Contact () { 
  const {id} = useParams(); 
  const contact = ContactsAPI.get(parseInt(id, 10)); 

  if (!contact) { 
    return ( 
      <div>
        Sorry, no contact was found
      </div>
    )
  }

  return ( 
<ContactCard />
  )

}