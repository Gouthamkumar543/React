import React from 'react'

export const Multiple_data = (z) => {
    const Style = {
        color: "orange",
        aline: "center"
    }
    return (
        <div style={{ textAlign: Style.aline, backgroundColor: Style.color }}>
            <p>{z.N}</p>
            <p>{z.A}</p>
            <p>{z.P}</p>
            <p>{z.G}</p>
            <p>{z.E}</p>
        </div>
    )
}
