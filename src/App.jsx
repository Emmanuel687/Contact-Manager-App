import React from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import Contactlist from "./components/Contactlist";
import { useState } from "react";
function App() {
  const[contacts,setContact]=useState([])


  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <Contactlist contacts={contacts}/>

    </div>

  );
}

export default App;
