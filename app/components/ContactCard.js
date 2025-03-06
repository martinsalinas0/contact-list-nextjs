import ContactListItem from "./ContactListItem";

export default function ContactCard() {
  return (

    <div className="contact-info">Conact Info
    <div className="container">
      <div className="row">
        <label className="text-center label-huh"> Name</label>
        <p>user.name</p>

        <label className="text-center"> Email</label>
        <p>user.email</p>

        <label className="text-center"> Image URL</label>
        <div className="text-center">
          <p>img src="img.jpeg"</p>
        </div>

        <label className="text-center"> Phone Number</label>
        <p>user.phoneNumber</p>

        <div className="row m-4 text-center">
          <ContactListItem />
        </div>
      </div>
    </div></div>
  );
}
