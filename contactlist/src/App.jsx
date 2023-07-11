import React, { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import { useEffect } from "react";

function App() {
  const [contactList, setContactList] = useState(0);

  // useEffect(async () => {
  //   const fetchList = await fetch(
  //     "https://jsonplace-univclone.herokuapp.com/users"
  //   );
  //   const data = await res.json();
  //   console.log(data);
  // }, []);
  return (
    <>
      <ContactList />
      {/* <h1>Welcome</h1> */}
    </>
  );
}

export default App;
