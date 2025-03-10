


'use client'
import { useParams } from "next/navigation"
import Link from "next/link"
import { ContactsAPI } from "@/app/data/ContactsAPI"


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
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "40rem",  width: "50rem" }}>
        <div className="card-body text-center">
          <h1 className="card-title">{contact.name} </h1>
          <img
            src={'contact.imageUrl'}
            className="rounded img-fluid "
            style={{ width:450, height: 350 }}
          />
          <p className="card-text">{contact.number}</p>
          <p className="card-text">{contact.email}</p>
        </div>
      </div>
    </div>
  )

}