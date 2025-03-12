import React, { useContext, useState } from 'react'
import { C_API } from '../../App'

export const Data = () => {

    const { data } = useContext(C_API)
    const [hide, setHide] = useState(false)

    const ShowCards = () => {
        setHide(!hide)
    }

    return (
        <div>
            <button onClick={ShowCards}>Data</button>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                {
                    hide && data.map(x => {
                        return (
                            <div style={{ border: "2px solid black", width: "300px" }}>
                                <h1>{x.name}</h1>
                                <img src={x.image} width={200} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
