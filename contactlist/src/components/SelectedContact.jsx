import { useEffect, useState } from "react";

export default function SelectedContact({ contact }) {
  // basic functions or structor

  const [singleContact, setSingleContact] = useState(0);
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
  // console.log(singleContact);
  //--- object deconstruction w props ---
  // function button({ count, setCount }) {
  //   return (
  //     <button
  //       onClick={() => {
  //         setCount(count);
  //       }}
  //     >
  //       {count}
  //     </button>
  //   );
  // console.log(singleContact.company.name);
  const [count, setSelectedContactId] = useState(0);
  return (
    <div>
      <td>{singleContact.name}</td>
      <td>{singleContact.phone}</td>
      <td>{singleContact.email}</td>
    </div>
  );
}
