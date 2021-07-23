import React, { useState } from "react";
<<<<<<< HEAD
import "../styles/menuitem.scss";
const MenuItem = ({ id, menuItems, setMenuItems, name, price }) => {
  const [itemNumber, setItemNumber] = useState(0);

  console.log(menuItems);
  const handlePlus = () => {
    let objIndex = menuItems.findIndex((obj) => obj.id === id);
    let newItem = [...menuItems];
    let object = {
      id: id,
      name: name,
      numberOfPlates: itemNumber + 1,
      price: price,
    };
    newItem[objIndex] = object;
    setMenuItems(newItem);
    setItemNumber(itemNumber + 1);
  };

  function handleDeleteClick(id) {
    const removeItem = menuItems.filter((menuItem) => {
      return menuItem.id !== id;
    });
    setItemNumber(0);
    setMenuItems(removeItem);
  }
  const handleMinus = () => {
    if (itemNumber === 1) {
      handleDeleteClick(id);
    } else {
      let objIndex = menuItems.findIndex((obj) => obj.id === id);
      let newItem = [...menuItems];
      let object = {
        id: id,
        name: name,
        numberOfPlates: itemNumber - 1,
        price: price,
      };
      newItem[objIndex] = object;
      setMenuItems(newItem);
      setItemNumber(itemNumber - 1);
    }
  };

  const handlePlusButton = () => {
    setItemNumber(1);
    setMenuItems([
      ...menuItems,
      { id: id, name: name, numberOfPlates: 1, price: price },
    ]);
  };

  return (
<<<<<<< HEAD
    // <>
    //   <div className="w-full flex items-center justify-around mt-5">
    //     {" "}
    //     <h3 className="text-white text-lg">{name}</h3>
    //     <h3 className="text-white text-lg">Rs. {price} </h3>
    //     {itemNumber > 0 ? (
    //       <div className=" w-20 flex justify-around items-center text-xl">
    //         <button className="bg-white w-4 rounded" onClick={handleMinus}>
    //           -
    //         </button>
    //         <h2 className="text-white mx-2">{itemNumber}</h2>
    //         <button className="bg-white w-4 rounded" onClick={handlePlus}>
    //           +
    //         </button>
    //       </div>
    //     ) : (
    //       <button
    //         className="bg-green-500 rounded-md w-14 text-xl"
    //         onClick={handlePlusButton}>
    //         Add +
    //       </button>
    //     )}
    //   </div>
    // </>
    <div className="menuitems">
    <img
      className="menuitems__img"
      src="https://www.simplyrecipes.com/thmb/WFAZWL7N-orBG_wnB52Zun4xxhk=/3111x3111/smart/filters:no_upscale()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg"
      alt=""
    />
    <h3>{name}</h3>
    <hr/>
=======
    <div className="menuitems">
      <img
        className="menuitems__img"
        src="https://www.simplyrecipes.com/thmb/WFAZWL7N-orBG_wnB52Zun4xxhk=/3111x3111/smart/filters:no_upscale()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg"
        alt=""
      />
      <h3>{name}</h3>
      <hr/>

    {/* {itemNumber > 0 ? (
      <div>
        {" "}
        <h3>Qty - </h3>
        <button onClick={() => setItemNumber(itemNumber - 1)}>-</button>
        {itemNumber}
        <button onClick={() => setItemNumber(itemNumber + 1)}>+</button>
      </div>
    ) : (
      <button
        onClick={() => setItemNumber(itemNumber + 1)}
        className="bg-white">
        Add +
      </button>
    )}
    {itemNumber ? (
      <button
        onClick={() => {
          setToggle(true);
          setMenuItems([
            ...menuItems,
            { id: id, name: name, numberOfPlates: itemNumber },
          ]);
        }}>
        {toggle ? "Added" : "Add to order list"}
      </button>
    ) : null} */}
    {itemNumber > 0 ? (
      <div  className="menuitems__button2">
        <button className="menuitems__button3" onClick={handleMinus}>
          <img className="menuitems__img2" src="https://img.icons8.com/material-outlined/24/000000/minus.png" />
        </button>
       <h2>  {itemNumber}</h2>
        <button className="menuitems__button4" onClick={handlePlus}>
          <img className="menuitems__img3" src="https://img.icons8.com/android/24/000000/plus.png" />
        </button>
<<<<<<< HEAD
      </div>
    ) : (
      <button  onClick={handlePlusButton}>
        <img className="menuitems__img4" src="https://img.icons8.com/material-rounded/48/000000/plus--v2.png" />
      </button>
    )}
  </div>
=======
      ) : null} */}
      {itemNumber > 0 ? (
        <div  className="menuitems__button2">
          <button className="menuitems__button3" onClick={handleMinus}>
            <img className="menuitems__img2" src="https://img.icons8.com/material-outlined/24/000000/minus.png" />
          </button>
         <h2>  {itemNumber}</h2>
          <button className="menuitems__button4" onClick={handlePlus}>
            <img className="menuitems__img3" src="https://img.icons8.com/android/24/000000/plus.png" />
          </button>
        </div>
      ) : (
        <button  onClick={handlePlusButton}>
          <img className="menuitems__img4" src="https://img.icons8.com/material-rounded/48/000000/plus--v2.png" />
        </button>
      )}
    </div>
>>>>>>> 83659a61682c156315153614598ac82bdaaa13ea
  );
};

export default MenuItem;
