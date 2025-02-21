import React from 'react'
import { useEffect, useState } from 'react';
import a from "axios"


export const Mount_update = () => {

    const [width, setWidth] = useState("100%")
    const [randomColor, setRandomColor] = useState()
    const [randomBgColor, setRandomBgColor] = useState()

    useEffect(() => {
        a.get("https://dummyjson.com/products")
            .then(res => console.log(res))
            .catch(err => console.log(console.log(err)))
    }, [])

    useEffect(() => {
        let bgColor = "#"
        let color = "#"

        let x = "abcdef0123456789"
        let y = "abcdef0123456789"

        for (let i = 1; i <= 6; i++) {
            let value1 = Math.floor(Math.random() * x.length)
            let value2 = Math.floor(Math.random() * y.length)

            // console.log(value);

            bgColor += y[value2]
            setRandomBgColor(bgColor)

            color += x[value1]
            setRandomColor(color)
        }
        // console.log(bgColor);    
        // console.log(color);
    }, [width])

    return (
        <div>
            <div style={{ backgroundColor: randomBgColor, color: randomColor, margin: "20px" }}>
                <button onClick={() => setWidth("100%")} style={{ margin: "5px" }}>100%</button>
                <button onClick={() => setWidth("80%")} style={{ margin: "5px" }}>80%</button>
                <button onClick={() => setWidth("60%")} style={{ margin: "5px" }}>60%</button>
                <button onClick={() => setWidth("40%")} style={{ margin: "5px" }}>40%</button>
                <button onClick={() => setWidth("20%")} style={{ margin: "5px" }}>20%</button>
                <button onClick={() => setWidth("10%")} style={{ margin: "5px" }}>10%</button>
                <h1>Welcome to the world</h1>
                <h1>Welcome to the world</h1>
                <h1>Welcome to the world</h1>
                <h1>Welcome to the world</h1>
                <h1>Welcome to the world</h1>
                <h1>Welcome to the world</h1>
                <h1>Welcome to the world</h1>
            </div>
        </div>

    )
}
