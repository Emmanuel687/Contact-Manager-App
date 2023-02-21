import React from "react";

const Contactlist = ({contacts}) => {
  const renderContactList = contacts.map((contact) => (
    <div className="item">
      <div className="content">
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>
        <i className="trash alternate outline icon"></i>
      </div>
    </div>
  ));

  return <div className="ui celled list">{renderContactList}</div>;
};

export default Contactlist;
