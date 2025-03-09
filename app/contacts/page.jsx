//contacts/page
"use client";
import Link from "next/link";
import { useState } from "react";
import { ContactsAPI } from "../data/contactsAPI";
import AddContactComp from "../components/ContactCard";

export default function Contacts() {
  const [allContacts, _] = useState(ContactsAPI.all());

  return (
    <main>
      <div className="container mt-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search Contacts"
        />

        <ul className="list-group">
          {allContacts.map(({ id, imageUrl, name, email, number }) => (
            <li
              key={id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <img
                  src={imageUrl}
                  alt="profile"
                  className="rounded-circle me-3"
                  style={{ width: 50, height: 50 }}
                ></img>
                <div>
                  <Link
                    href={`/contacts/${id}`}
                    className="text-primary text-decoration-none fw-bold"
                  >
                    {name}
                  </Link>
                  <div >{email}</div>
                  <div >{number}</div>
                </div>
              </div>
              <a href="#" className="text-primary text-decoration-none">
                Edit
              </a>
            </li>
          ))}
        </ul>
       

        <div className="mt-3">
          <Link href="/contacts/new" className="btn btn-primary">
            Add Contact
          </Link>
          <Link href="/.." className="btn btn-secondary ms-2">
            Back
          </Link>
        </div>
      </div>
    </main>
    // <main>
    //   <div>

    //   </div>
    //   <div>
    //     <div>
    //       <div className="container mt-4">
    //         <div className="mb-3">
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Search Contacts"
    //           />
    //         </div>

    //         <ul className="list-group">
    //           {allContacts.map((contact) => (
    //             <li
    //               key={contact.id}
    //               className="list-group-item d-flex align-items-center justify-content-between"
    //             >
    //               <div className="d-flex align-items-center">
    //                 <img
    //                   src={contact.imageUrl}
    //                   alt="profile"
    //                   className="rounded-circle me-3"
    //                   style={{ width: "50px", height: "50px" }}
    //                 />

    //                 <div>
    //                   <a
    //                     href="#"
    //                     className="text-primary text-decoration-none fw-bold"
    //                   >
    //                      <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
    //                   </a>
    //                   <div className="text-muted">{contact.email}</div>
    //                   <div className="text-muted">{contact.number}</div>
    //                 </div>
    //               </div>

    //               <a href="#" className="text-primary text-decoration-none">
    //                 Edit
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>

    //     <Link href="/contacts/new">Add Contact</Link>
    //     <br></br>
    //     <Link href="/..">Back</Link>
    //   </div>
    // </main>
  );
}
