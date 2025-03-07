import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='About-page'>
      <div>
        <h1>About Foodies – Your Go-To Recipe Hub!</h1>
        <p>At <strong>Foodies</strong>, we believe that <em>great food starts in the heart of the home—your kitchen!</em>Whether you're a beginner or an experienced cook, our goal is to inspire you with <strong>delicious, easy-to-follow recipes</strong> that bring joy to every meal.</p>
        <h2>Why Choose Foodies?</h2>
        <ul>
          <li><strong>Fresh & Quality Ingredients</strong> – We focus on using wholesome ingredients to create flavorful dishes.</li>
          <li><strong>Diverse Recipes</strong> – From comforting classics to exciting global flavors, there's something for everyone.</li>
          <li><strong>Step-by-Step Guides</strong> – Our easy-to-follow instructions make cooking stress-free and fun.</li>
          <li><strong>Community & Sharing</strong> – Connect with fellow food lovers and share your own favorite recipes.</li>
        </ul>
        <h2>Our Story</h2>
        <p><strong>Foodies</strong> was created with a passion for cooking and sharing recipes. What started as a small collection of family favorites has grown into a vast collection of recipes loved by home cooks worldwide. Our mission is simple: <em>to make home cooking fun, delicious, and accessible to all </em></p>
        <h2>Our Promise</h2>
        <p>Whether you're cooking for yourself, your family, or friends, we promise to bring you <strong>reliable, mouthwatering recipes</strong> that you'll want to make again and again!</p>
        <a href="/recipes" className='About-link'>Browse Our Recipes</a>
      </div>
    </div>
  )
}

export default About