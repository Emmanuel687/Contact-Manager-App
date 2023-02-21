import React from "react";
import ContactCard from "./ContactCard";

const Contactlist = (props) => {
  const renderContactList = props.contacts.map((contact) => (
     <ContactCard contact={contact}/>
  ));

  return <div className="ui celled list">{renderContactList}</div>;
};

export default Contactlist;
