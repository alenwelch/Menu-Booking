import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import firebase from "firebase";
import db from "./../firebase";
const Nav = ({ table, menuItems, setMenuItems }) => {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const submitOrder = () => {
    db.collection(`table${table}`).add({
      order: menuItems,
      username: name,
      table: table,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const checkMenu = (event) => {
    event.preventDefault();
    if (menuItems.length > 0 && name !== "") {
      submitOrder();
    } else {
      alert("Order any meal.");
    }
  };
  return (
    <div className="nav">
<<<<<<< HEAD
      <h1 className="nav__logo">LOGO </h1>
      <h1 className="nav__table">Table {table}</h1>
=======
    <h1 className="text-2xl" >LOGO </h1>
    <h1 className="text-2xl">Table {table}</h1>
>>>>>>> 83659a61682c156315153614598ac82bdaaa13ea
    </div>
  );
};

export default Nav;
