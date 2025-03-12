import React, { useContext, useState } from 'react'
import { C_API } from '../../../App'

const Cart = () => {

    const {cart, setCart } = useContext(C_API)

    return (
        <div>
            Cart
            {
                cart.map(x=>{
                    return(
                        <div>
                            <img src={x.image} width={200}/>
                            <button onClick={()=>{setCart(cart.filter(item=>item.id !== x.id))}}>Remove item</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart