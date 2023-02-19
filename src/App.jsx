import React from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactCard from "./components/ContactCard";
import Contactlist from "./components/Contactlist";
function App() {
  return (
    <div>
      <Header />
      <AddContact />
      <Contactlist />
      <ContactCard />

    </div>

  );
}

export default App;
