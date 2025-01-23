/* eslint-disable react/prop-types */
function Carousel ({ images, currentIndex, handleLeftClick, handleRightClick }) {
  return (
    <div>
      <button onClick={handleLeftClick} >◀</button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        
      />
      <button onClick={handleRightClick} >▶</button>
    </div>
  )
}

export default Carousel