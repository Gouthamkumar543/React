import React from 'react'
import { useState } from 'react'

export const Buttons_with_bgcolor = () => {

    const [bgColor, setBgColor] = useState("white")
    const [textSize, setTextSize] = useState("")

    function bgChanger(y, z) {
        setBgColor(y)
        setTextSize(z)
    }

    return (
        <div style={{backgroundColor: bgColor }}>
            <div style={{ textAlign: 'center', fontSize: textSize }}>
                <h1 style={{ fontSize: textSize }}>Goutham kumar</h1>
                <p>Welcome to my world</p>
                <a href='#'>Amazon</a>
            </div>
            <div style={{ display: 'flex', gap: "10px", margin: "20px", flexWrap: 'wrap' }}>
                <button onClick={() => bgChanger()}>normal</button>
                <button onClick={() => bgChanger("red", "3rem")}>red</button>
                <button onClick={() => bgChanger("violet", "2.5rem")}>violet</button>
                <button onClick={() => bgChanger("pink", "2rem")}>pink</button>
                <button onClick={() => bgChanger("lightblue", "1.5rem")}>lightblue</button>
                <button onClick={() => bgChanger("gold", "1rem")}>gold</button>
            </div>
        </div>
    )
}
