import React from 'react'

const Header = () => {
    return (
        <div className='HeaderSection'>
            <div className="left">
                <h1>Goutham's Fashion Hub</h1>
            </div>
            <div className="middle">
                <div>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Beauty</li>
                    </ul>
                </div>
                <div>
                    <input type="text" placeholder='search here...' className='search' />
                </div>
            </div>
            <div className="right">
                <div>SignIn</div>
                <div>Cart</div>
            </div>
        </div>
    )
}

export default Header