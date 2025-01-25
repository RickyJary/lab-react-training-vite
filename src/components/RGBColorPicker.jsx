import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div>

      <SingleColorPicker color="r" value={rValue} onChange={setRValue} />
      <SingleColorPicker color="g" value={gValue} onChange={setGValue} />
      <SingleColorPicker color="b" value={bValue} onChange={setBValue} />

      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            border: "1px solid black",
            backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
          }}
        ></div>
        <p>{`rgb(${rValue}, ${gValue}, ${bValue})`}</p>
      </div>
    </div>
  );
}

export default RGBColorPicker;
