import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer style={{ backgroundColor: '#222', color: '#fff', padding: '20px', textAlign: 'center',marginTop: "10px" }}>
        <p>&copy; 2025 Goutham's Fashion Hub</p>
        <div>
          <a href="https://facebook.com" style={{ margin: '0 10px', color: '#fff' }}>Facebook</a>
          <a href="https://instagram.com" style={{ margin: '0 10px', color: '#fff' }}>Instagram</a>
          <a href="https://twitter.com" style={{ margin: '0 10px', color: '#fff' }}>Twitter</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer