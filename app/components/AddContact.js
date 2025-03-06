import ContactListItem from "./ContactListItem";

export default function AddContact(onAdd) {


    // const [contacts, setContacts] = useState('')
    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    //const [phone, setPhone] = useState('')
    // 
    // const [imageUrl, setImage] = useState('')
    

      const handleNewContact = () => { 
        if (name && phone) { 
          onAdd({name, phone}); 
          setName('')
          setPhone('')
        }
      }

  
  return (


    <div> 
      <input placeholder="enter name" value={name} onChange={(event) => setName(event.target.value)}
      className="mb-2" /> 
      <input placeholder="Enter Phone Number" value={phone} onChange={(event) => setPhone(event.target.value)}
      className="mb-2" /> 

      <button onClick={handleNewContact} className="btn btn-primarty"> ADD Conact</button>
    </div>


    // <div className="container">
    //   <div className="row">
    //     <label className="text-center"> Name</label>
    //     <input type="text" placeholder="Enter your Name"></input>

    //     <label className="text-center"> Email</label>
    //     <input type="email" placeholder="Enter email" />

    //     <label className="text-center"> Image URL</label>
    //     <div className="text-center">
    //       <input type="file" placeholder="Upload image URL" />
    //     </div>

    //     <label className="text-center"> Phone Number</label>
    //     <input type="text" placeholder="Enter phone number " />

    //     <div className="row m-4 text-center">
    //       <ContactListItem />
    //     </div>
    //   </div>
    // </div>
  );
}
