import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'
const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  return (
  <section className='hero'>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>Payment infastructure for the internet</h1>
        <p>Millions .... People .... Spend.... Money.... to learn .... React.....</p>
         <button className='btn'>Start now</button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} className='phone-img' alt='phone'/>
      </article>
    </div>
  </section>
)}

export default Hero
