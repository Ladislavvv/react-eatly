import React from 'react'

function BannerBlock() {
  return (
    <section className='banner'>
        <h2 className='banner-title'>GET 50%</h2>
        <form className='subscribe-form'>
          <input type="email" placeholder='Enter Your Email Address' />
          <button type='submit'>subscribe</button>
        </form>
        <img className='banner-img' src="/img/food-image.png" alt="Salad" />
      </section>
  )
}

export default BannerBlock
