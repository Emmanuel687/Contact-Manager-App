import React from "react";
import user from "../images/user.png"

const ContactCard = ({contact}) => {
  const{id,name,email}=contact
  

  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>

        <div></div>
      </div>
       <i className="trash alternate outline icon"
       style={{color:"red",marginTop:"px"}}></i>
        </div>
  );
};

export default ContactCard;
