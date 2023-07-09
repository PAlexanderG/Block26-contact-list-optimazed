import React, { useEffect, useState } from "react";
import ContactList from "./components/ContactList";

function App() {
  //   const [contactList, setContactList] = useState(0)

  //   useEffect(async() => {
  //     const fetchList = await fetch('')
  //     const data = await res.json()
  //     console.log(data);
  // }, [])
  return (
    <>
      <ContactList />
      {/* <h1>Welcome</h1> */}
    </>
  );
}

export default App;
