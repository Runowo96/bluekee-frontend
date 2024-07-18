import React, { useState } from "react";
import "./Selector.scss";

function Selector({selected,setSelected}) {
  // const [catagories, setCatagories] = useState([]);
  const data = {
    category: [
      "All",
      "Nature",
      "Wildlife",
      "Landscape",
      "People",
      "Urban",
      "Aerial",
      "Macro",
    ],
  };
  // setCatagories(data);
  const [number, setNumber] = useState(0);
  function increment() {
    setNumber(number + 1);
    return number;
  }

  return (
    <div>
      {data.category.map((cata) => {
        const isSelected = selected === cata;
      
        
        console.log(cata)
        return <button className={!isSelected ? "sel-btn" : "sel-btn__selected" } key={increment} onClick={() => setSelected(cata)}>{cata}</button>;
      })}
    </div>
  );
}

export default Selector;
