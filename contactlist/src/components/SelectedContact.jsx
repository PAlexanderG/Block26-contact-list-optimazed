import { useEffect, useState } from "react";

export default function SelectedContact({ setSelectedContactId, contact }) {
  //--- object deconstruction w props ---
  // function Button({count, setCount}) {
  //
  //   return (
  //     <button
  //       onClick={() => {
  //         setCount(count)
  //       }}
  //     >
  //       {count}
  //     </button>
  //   );
  // }

  const [count, setSelectedContactId] = (useState = 0);
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
