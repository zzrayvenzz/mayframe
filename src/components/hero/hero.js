import React from 'react'
import "./hero.css"

const hero = () => {
  return (
    <div className="main">
      <div className='mainContainer'>
      <div className="heroText">
          <h1>Build and Grow Your Business with Expert Guidance</h1>
          <p>At MayFrame group, we specialized in driving transformative 
            growth and success that assist businesses in various domains.</p>
          <button>Explore More</button>
      </div>
      </div>
      {/* <div className="performance">
        <div className='farmers'>
          <h2>100k</h2>
          <p>farmers joined with us</p>
        </div>
        <hr/>
        <div className='product'>
        <h2>1000k</h2>
          <p>products sold</p>
        </div>
        <hr/>
        <div className='construction'>
        <h2>124+</h2>
          <p>products sold</p>
        </div>
      </div> */}
    </div>
  )
}

export default hero