import React, { useState } from "react";
import "./Gallery.scss";
import Selector from "../Selector/Selector";

function Gallery() {
  const [selected, setSelected] = useState('All')
  return (
    <div>
      <Selector selected={selected} setSelected={setSelected} />
<p>{selected}</p>

    </div>
  );
}

export default Gallery;
