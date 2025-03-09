import Link from "next/link";

export default function ContactItem({ contact }) {
  return (
    <div>
      <li className="list-group-item d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={contact.imgUrl}
            alt="profile picture"
            className="rounded-cirlce me-3"
            style={{ width: 50, height: 50 }}
          />
          <div>
            <Link href="/contacts/{contact.id}">{contact.name}</Link>
            <div className="text-muted">{contact.email}</div>
            <div className="text-muted">{contact.number}</div>
          </div>
        </div>

        <Link
          href={`/contacts/edit${contact.id}`}
          className="text-primary text-decortion-none"
        >
          Edit{" "}
        </Link>
      </li>
    </div>
  );
}
