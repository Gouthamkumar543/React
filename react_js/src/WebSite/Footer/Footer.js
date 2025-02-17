import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <div>
      <div id="Footer">
        <div>
          <h1>Contact</h1>
          <p>Tell us everything</p>
          <a href='#'>Do you have any question? Feel free to reach out.</a>
          <a href='#' className='let'>Let's Chat</a>
        </div>
        <div>
          <h1>Policy</h1>
          <p>Application Security</p>
          <p>Software Principles</p>
        </div>
        <div>
          <p>Support Center</p>
          <p>Customer Support</p>
        </div>
        <div>
          <h1>Address</h1>
          <a href='#'>Rancho Santa Margarita</a>
          <a href='#'>2131 Elk Street</a>
          <a href='#'>California</a>
        </div>
        <div>
          <h1>Company</h1>
          <p>About</p>
          <p>Blog</p>
          <p>Press</p>
          <p>Careers & Culture</p>
        </div>
        <div>
          <h1>Language</h1>
          <p>Enghlish</p>
          <p>spanish</p>
        </div>
      </div>
      <div id='font'>
        <h1>Landy</h1>
        <div>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-solid fa-m"></i>
          <p><i class="fa-solid fa-mug-hot"></i> Buy me a coffe</p>
        </div>
      </div>
    </div>
  )
}