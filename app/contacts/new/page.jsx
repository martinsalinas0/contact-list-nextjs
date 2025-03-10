//contacts/new/page
"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [id, setId] = useState();
  const router = useRouter();
 

  const handleSubmitContactClick = () => {
    ContactsAPI.addContact({
      name,
      email,
      id,
      imageUrl,
      number
    });
    router.push("/contacts");
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form>
          <div className="mb-3 text-center">
            <label  className="form-label">
              Nameccc
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <br />
          <div className="mb-3 text-center">
          <label  className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone Number"
            onChange={(event) => setNumber(parseInt(event.target.value, 10))}
          />
</div>
          <br />
          <div className="mb-3 text-center">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
</div>
          <div className="mb-3 text-center">
            <label  className="form-label">
              Profile Photo
            </label>
            <input
              type="file"
              className="form-control"
              placeholder="upload image"
              onChange={(event) => setImageUrl(event.target.files[0])}
            />
          </div>

          <button type="button" onClick={handleSubmitContactClick}>
            ADD CONTACT
          </button>
        </form>
      </div>

      <Link href="/contacts">Roster</Link>
    </div>
  );
}
