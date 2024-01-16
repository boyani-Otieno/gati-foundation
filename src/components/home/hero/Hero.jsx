import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Join the cause ' subtitle='Make a difference, No matter how small.' />

          <form className='flex'>
            <div className='box'>
              <span>Serve</span>
              <input type='text' placeholder='Anywhere' />
            </div>
            <div className='box'>
              <span>Inspire</span>
              <input type='text' placeholder='Young ones' />
            </div>
            <div className='box'>
              <span>Teach</span>
              <input type='text' placeholder='Everyone' />
            </div>
            <div className='box'>
              <h4>Protect</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
