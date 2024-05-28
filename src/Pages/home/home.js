import React from 'react'
// import Header from '../../components/header/header'
import Hero from '../../components/HeroHome/Hero2'
import Welcome from "../../components/Welcome/Welcome"
// import Benefits from '../../components/Benifits/Benifits'
import Value from "../../components/Values/Values";


const home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Hero/>
        <Welcome/>
        <Value/>
        {/* <Benefits/> */}
    </div>
  )
}

export default home