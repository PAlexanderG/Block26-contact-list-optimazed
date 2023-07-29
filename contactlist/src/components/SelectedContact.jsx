import { useEffect, useState } from "react";

export default function SelectedContact({ contact }) {
  const [singleContact, setSingleContact] = useState(0);

  // basic functions format: useEffect(()=>{},[])
  useEffect(() => {
    async function fetchSingleContacts() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contact}`
        );
        const result = await response.json();
        setSingleContact(result);
        // console.log(singleContact);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSingleContacts();
  }, []);

  const [count, setSelectedContactId] = useState(0);
  return (
    <>
      <div>
        <h2>Contact Detail</h2>
        <td>{singleContact.name}</td>
        <td>{singleContact.phone}</td>
        <td>{singleContact.username}</td>
        <td>{singleContact.email}</td>
      </div>
      <div>
        <h2>Address</h2>
        <td>{singleContact.adress}</td>
      </div>
      <div>
        <h2>Business Details</h2>
        <td>{singleContact.business}</td>
      </div>
    </>
  );
}
