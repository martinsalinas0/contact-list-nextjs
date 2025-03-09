export default function ContactCard() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "40rem",  width: "50rem" }}>
        <div className="card-body text-center">
          <h1 className="card-title">NAME HERE </h1>
          <img
            src="https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U="
            className="rounded img-fluid "
            style={{ width:450, height: 350 }}
          />
          <p className="card-text">512-543-1234</p>
          <p className="card-text">namehere@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
