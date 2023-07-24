import React, { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import { useEffect } from "react";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [contactList, setContactList] = useState(0);
  return (
    <>
      {selectedContactId ? <div>Selected Contact View</div> : <ContactList />}
    </>
  );
}

export default App;
