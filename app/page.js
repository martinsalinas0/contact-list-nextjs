'use client'

//import Image from "next/image";
//import styles from "./page.module.css";
//import ContactCard from "./components/ContactCard";
import "bootstrap/dist/css/bootstrap.min.css";
// import SearchBar from "./components/SearchBar";
// import ContactList from "./components/ContactList";
import { useState } from "react";
import AddContact from "./components/AddContact";



export default function Home() {

  const [contacts, setContacts] = useState('')

  const addContact = (contact) => { 
    setContacts([...contacts, contact])
  }



  return (
    <div>
    <h1> HOME PAGE</h1>
    </div>
  );
}
