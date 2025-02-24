import React from 'react'
import "./About.css"

export const About = () => {
  return (
    <div className='About-page'>
      <div>
      <h1>About Foodies – Where Every Bite is a Delight!</h1>
      <p>At <strong>Foodies</strong>, we believe that <em>good food brings people together</em>. Whether you're craving a comforting meal after a long day or celebrating a special moment with loved ones, we're here to serve you <strong>delicious, high-quality food</strong> made with love.</p>
      <h2>What Makes Us Special?</h2>
      <ul >
        <li><strong>Fresh & High-Quality Ingredients</strong>- We use only the freshest ingredients to ensure the best taste.</li>
        <li><strong>A Variety of Flavors</strong>- From classic burgers to gourmet dishes, there's something for everyone.</li>
        <li><strong>Fast & Reliable Delivery</strong>-Hot, fresh, and right on time—just the way you like it!</li>
        <li><strong>Customer First Approach</strong>- Your satisfaction is our priority. We strive to bring you a seamless experience.</li>
      </ul>
      <h2>Our Story</h2>
      <p><strong>Foodies</strong> was founded with a simple mission: <em>to serve great food, made with passion.</em> What started as a small food venture
        quickly grew into a go-to destination for food lovers. Today, we take pride in delivering happiness—one meal at a time!</p>
      <h2>Our Promise</h2>
      <p>Whether you’re dining in, ordering takeaway, or getting food delivered, we promise <strong>flavor, freshness, and satisfaction in every bite!</strong></p>
      <a href="/menu" className='About-link'>Explore Our Menu</a>
    </div>
    </div>
  )
}
