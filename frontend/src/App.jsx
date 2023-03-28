import "./App.css";

import { useState, React } from "react";

import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

// const db = new Dexie("Marketlist");
// db.version(1).stores({
//   preMatch: "++id,initials,event,match,tablet,teamNumber,preload",
//   auto: "++id,",
//   teleop: "",
//   endgame: "",
// });

const App = () => {
  // const preMatch = useLiveQuery(() => db.preMatch.toArray(), []);
  // const auto = useLiveQuery(() => db.auto.toArray(), []);
  // const teleop = useLiveQuery(() => db.teleop.toArray(), []);
  // const endgame = useLiveQuery(() => db.endgame.toArray(), []);

  const [preMatchLocal, setPreMatchLocal] = useState({
    initials: "",
    event: "",
    match: 0,
    tablet: "",
    team: 0,
    preload: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPreMatchLocal({
      ...preMatchLocal,
      [e.target.name]: value,
    });
  };

  // if (!preMatch && !auto && !teleop && !endgame) return null;

  // const submitToDb = async (event) => {
  //   event.preventDefault();
  //   const name = document.querySelector(".item-name").value;
  //   const price = document.querySelector(".item-price").value;
  //   await db.items.add({
  //     name,
  //     price: Number(price),
  //     itemHasBeenPurchased: false,
  //   });
  // };

  // const removeItemFromDb = async (id) => {
  //   await db.items.delete(id);
  // };

  // const markAsPurchased = async (id, event) => {
  //   if (event.target.checked) {
  //     await db.items.update(id, { itemHasBeenPurchased: true });
  //   } else {
  //     await db.items.update(id, { itemHasBeenPurchased: false });
  //   }
  // };

  // const itemData = allItems.map(({ id, name, price, itemHasBeenPurchased }) => (
  //   <div className="row" key={id}>
  //     <p className="col s5">
  //       <label>
  //         <input
  //           type="checkbox"
  //           checked={itemHasBeenPurchased}
  //           onChange={(event) => markAsPurchased(id, event)}
  //         />
  //         <span className="black-text">{name}</span>
  //       </label>
  //     </p>
  //     <p className="col s5">${price}</p>
  //     <i
  //       onClick={() => removeItemFromDb(id)}
  //       className="col s2 material-icons delete-button"
  //     >
  //       delete
  //     </i>
  //   </div>
  // ));

  return (
    <div>
      <input
        type="text"
        name="initials"
        value={preMatchLocal["initials"]}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="event"
        value={preMatchLocal["event"]}
        onChange={(e) => handleChange(e)}
      />
      <p>
        initials: {preMatchLocal["initials"]}
        event: {preMatchLocal["event"]}
      </p>
    </div>
    // <div className="container">
    //   <h3 className="green-text center-align">Market List App</h3>
    //   <form className="add-item-form" onSubmit={(event) => addItemToDb(event)}>
    //     <input
    //       type="text"
    //       className="item-name"
    //       placeholder="Name of item"
    //       required
    //     />
    //     <input
    //       type="number"
    //       step=".01"
    //       className="item-price"
    //       placeholder="Price in USD"
    //       required
    //     />
    //     <button type="submit" className="waves-effect waves-light btn right">
    //       Add item
    //     </button>
    //   </form>
    //   {allItems.length > 0 && (
    //     <div className="card white darken-1">
    //       <div className="card-content">
    //         <form action="#">{itemData}</form>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default App;
