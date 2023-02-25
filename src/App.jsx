import React from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import Contactlist from "./components/Contactlist";
import { useState } from "react";
function App() {
  const[contacts,setContact]=useState([])
  const addContactHandler =(contact)=>{
  setContact([...contacts, contact])

  }


  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <Contactlist contacts={contacts}/>

    </div>

  );
}

export default App;
