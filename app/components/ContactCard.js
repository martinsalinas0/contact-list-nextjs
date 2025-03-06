import ContactListItem from "./ContactListItem";


export default function ContactCard() {


  return (
    <div className="container">
      <div className="row">
      <label> Name</label>
      <input type="text" placeholder="Enter your Name"/>

      <label> Email</label>
      <input type="email" placeholder="Enter email" />

      <label> image URL</label>
      <input type="file" placeholder="Upload image URL"/>

      <label> Phone Number</label>
      <input type="text" placeholder="Enter phone number "/>
       
</div> 
      <ContactListItem /> 
    </div>
  );
}
