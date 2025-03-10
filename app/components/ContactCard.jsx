"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ContactCard({ contact }) {
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`/contacts/edit/${contact.pid}`);
  };

  return (
  
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "40rem",  width: "50rem" }}>
          <div className="card-body text-center">
            <h1 className="card-title">{contact.name} </h1>
            <img
              src={contact.imageUrl}
              className="rounded img-fluid "
              style={{ width:450, height: 350 }}
            />
            <p className="card-text">Phone Number: <strong>{contact.number}</strong></p>
            <p className="card-text">Email address: <strong>{contact.email}</strong></p>
            <p>ID#: {contact.pid}</p>
            <button>Edit</button>
            <button>Delete</button>
            <button>Back</button>


          </div>
        </div>
      </div>
   
  );
}
