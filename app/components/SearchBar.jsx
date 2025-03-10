import { ContactsAPI } from "../data/contactsAPI";

function SearchBar() {

  const[query, setQuery] = useState('')

console.log(query)
  return (
    <div>
      <input type="text" placeholder="Search.." onChange={(event) => setQuery(event.target.value)} />
      <ul>
        {ContactsAPI.contacts.map((contact) => (
          <li key={id} className="list-item">{contact.name}</li>
                ))}
      </ul>
    </div>
  );
}
