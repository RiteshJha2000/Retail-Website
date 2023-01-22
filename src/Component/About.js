import React from 'react'
import about_pic from "../img/a5.png"
import "./About.css"

export default function About() {
  return (
    <div className='about' id='about'>
        <h2>About Us</h2>
        <img src={about_pic} alt="" data-aos="fade-down"/>
        <p data-aos="fade-up">  We SWAAD at New Delhi, is home to a wide range of pulses , Spices and Makhana that cater to the diverse taste buds of every patron. Our foremost priority is to provide best quality products along with the highest level of customer satisfaction. All of our products are made using unique recipes that will leave a memorable aftertaste in your mouth. And as quality goes hand in hand with the taste, we believe in delivering the best quality products to our customers.  </p>
    </div>
  )
}
