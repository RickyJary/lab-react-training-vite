/* eslint-disable react/prop-types */
function SingleColorPicker({ color, value, onChange }) {
  const colorName = color.toUpperCase();

  return (
    <div style={{ margin: "10px 0" }}>
      <label>
        {colorName}:
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Math.min(255, Math.max(0, e.target.value)))}
          style={{ marginLeft: "10px", width: "60px" }}
        />
      </label>
      <div
        style={{
          display: "inline-block",
          width: "50px",
          height: "50px",
          backgroundColor:
            color === "r"
              ? `rgb(${value},0,0)`
              : color === "g"
              ? `rgb(0,${value},0)`
              : `rgb(0,0,${value})`,
          marginLeft: "20px",
          border: "1px solid black",
        }}
      ></div>
    </div>
  );
}

export default SingleColorPicker;
