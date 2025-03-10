"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ContactsAPI } from "@/app/data/contactsAPI";

export default function EditContact() {
  const { pid } = useParams(); 
  const router = useRouter();
  const [contact, setContact] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  
  useEffect(() => {
    const foundContact = ContactsAPI.getMethod(parseInt(pid, 10));
    if (foundContact) {
      setContact(foundContact);
      setName(foundContact.name);
      setEmail(foundContact.email);
      setNumber(foundContact.number);
      setImageUrl(foundContact.imageUrl);
    }
  }, [pid]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImageUrl(newImageUrl);
    }
  };

  const handleSave = () => {
    if (!name || !email || !number) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedContact = {
      id: parseInt(pid, 10),
      name,
      email,
      number,
      imageUrl,
    };

    ContactsAPI.updateContact(updatedContact);
    router.push("/contacts"); 
  };

  if (!contact) {
    return <div>Sorry, contact not found</div>;
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="card p-4" style={{ width: "40rem" }}>
        <h2 className="text-center">Edit Contact</h2>
        <input
          type="text"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Edit Name"
        />
        <input
          type="text"
          className="form-control mb-2"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Edit Phone Number"
        />
        <input
          type="email"
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Edit Email"
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {imageUrl && <img src={imageUrl} className="rounded img-fluid mt-2" width="100" />}
        <button className="btn btn-success mt-2" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary mt-2" onClick={() => router.push("/contacts")}>
          Cancel
        </button>
      </div>
    </div>
  );
}
