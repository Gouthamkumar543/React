import React, { useContext,useState } from 'react'
import { C_API } from '../../../App'

const Recipes = () => {
    const { data, cart, setCart } = useContext(C_API)
    const [hide, setHide] = useState(false)

    const ShowCards = () => {
        setHide(!hide)
    }

    const addToCart = (item)=>{
        setCart([...cart,item])
        alert("Added sucefully")
    }

    return (
        <div>
            <button onClick={ShowCards}>Recipes</button>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                {
                    hide && data.map(x => {
                        return (
                            <div style={{ border: "2px solid black", width: "300px" }}>
                                <h1>{x.name}</h1>
                                <img src={x.image} width={200} />
                                <button onClick={()=>addToCart(x)}>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Recipes