import Image from "next/image";
import styles from "./page.module.css";
import ContactCard from "./components/ContactCard";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";


export default function Home() {
  return (
    <div>
      <SearchBar />
      <ContactList /> 
      <ContactCard />
    </div>
  );
}
