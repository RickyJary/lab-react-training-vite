/* eslint-disable react/prop-types */
function NumbersTable ({ limit }) {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div>
      {numbers.map((number) => (
        <div
          key={number}
          style={{
            backgroundColor: number % 2 === 0 ? "red" : "white",
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable