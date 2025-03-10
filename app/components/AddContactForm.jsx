"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ContactsAPI } from "../data/contactsAPI";

export default function AddContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const handleAddContact = (event) => {
    event.preventDefault();

    const newContact = {
      pid: Math.floor(Math.random() * 10000),
      name: name,
      number: number,
      email: email,
      imageUrl:
        imageUrl ||
        "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=",
    };

    ContactsAPI.AddContact(newContact);
    router.push("/contacts");
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "50rem" }}>
        <div className="card-body text-center">
          <h1 className="card-title">Add New Contact</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email Address"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Profile Picture</label>
              <input type="file" className="form-control" />
            </div>
            <button type="submit" className="btn btn-secondary mx-2">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary mx-2">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
