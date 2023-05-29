import React from 'react'
import "./container.css"
function ContainerComp({ reviews, currentIndex, handleNext, handlePrev, handleRandom, AiOutlineArrowLeft, AiOutlineArrowRight, GiPerspectiveDiceSixFacesRandom }) {
  return (
    <div key={reviews.id} className="container">
      <div className="slider">
        <div className="slide">
          <img src={reviews[currentIndex].image} alt={reviews[currentIndex].name} />
          <div className="name">{reviews[currentIndex].name}</div>
          <div className="job">{reviews[currentIndex].job}</div>
          <div className="text">{reviews[currentIndex].text}</div>
        </div>
      </div>
      <div className="btns">
        <button onClick={handlePrev}><AiOutlineArrowLeft /></button>
        <button onClick={handleNext}><AiOutlineArrowRight /></button>
        <button onClick={handleRandom}><GiPerspectiveDiceSixFacesRandom /></button>
      </div>
    </div>
  )
}

export default ContainerComp