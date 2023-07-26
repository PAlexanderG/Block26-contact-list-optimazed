import React, { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";
import SelectedContact from "./SelectedContact";

export default function ContactList({ setSelectedContactId }) {
  const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];
  const [contacts, setContacts] = useState(dummyContacts);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
        // console.log(Contacts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  // console.log(dummyContacts);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>

        {/* Map over data here */}
        {contacts.map((contacts) => {
          return (
            <ContactRow
              setSelectedContactId={setSelectedContactId}
              key={contacts.id}
              contact={contacts}
            />
          );
        })}
      </tbody>
    </table>
  );
}
// export default function ContactRow({ setSelectedContactId, contact }) {
//   return (
//     <tr
//       onClick={() => {
//         setSelectedContactId(contact.id);
//       }}
//     >
//       <td>{contact.name}</td>
//       <td>{contact.email}</td>
//       <td>{contact.phone}</td>
//     </tr>
//   );
// }
