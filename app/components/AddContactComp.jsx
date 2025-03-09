"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddContact({ onAddContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const router = useRouter();

  const handleSubmitContactClick = () => {
    const newContact = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      email: email,
      number: number,
      imageUrl: imageUrl,
    };
  };

  onAddContact(newContact);
  router.push("/contacts");

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <form className="w-50">
          <div className="mb-3 text-center">
            <label className="form-label">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
          </div>

          <div className="mb-3 text-center">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone Number"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
          </div>

          <div className="mb-3 text-center">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="mb-3 text-center">
            <label className="form-label">Profile Photo</label>
            <input
              type="file"
              className="form-control"
              onChange={(event) => {
                if (event.target.files.length > 0) {
                  setImageUrl(event.target.files[0]);
                }
              }}
            />
          </div>
        </form>
        <div className="text-center mt-3">
          <Link href="/contacts" className="btn btn-secondary">
            Roster
          </Link>
        </div>
      </div>
    </div>
  );
}
