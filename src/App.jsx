import React from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import Contactlist from "./components/Contactlist";
function App() {
  const contacts =[{
    id:"1",
    name:"Emmanuel",
    email:"koechemmanuel2002@gmail.com"
  },
  {
    id:"2",
    name:"Sharon",
    email:"sharon2002@gmail.com"
  },
  {
    id:"3",
    name:"Ian",
    email:"ian2002@gmail.com"
  }
]

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <Contactlist contacts={contacts}/>

    </div>

  );
}

export default App;
