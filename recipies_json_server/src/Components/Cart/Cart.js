import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Table } from 'react-bootstrap'

const Cart = () => {

    const [data,setData] = useState([])
    const [afterDelete,setAfterDelete] = useState()

    useEffect(()=>{
        axios.get("http://localhost:5000/cartitems")
        .then(res=>{
            // console.log(res.data)
            setData(res.data)
        })
        .catch(err=>{console.log(err)})
    },[afterDelete])

    console.log(data);

    const deleteCartItem = async (z)=>{
        try{
            await axios.delete(`http://localhost:5000/cartitems/${Number(z.id)}`)
            setAfterDelete(z)
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div style={{margin:"2px 0"}}>
        {data.length > 0 ? <Table striped bordered hover variant="dark">
              <thead>
                  <tr>
                      <th>S.no</th>
                      <th>Recipie Name</th>
                      <th>Image</th>
                      <th>Staus</th>
                  </tr>
              </thead>
              <tbody>
                  {data.map((x,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{x.name}</td>
                            <td><img src={x.image} alt='' width={100}/></td>
                            <td><Button onClick={()=>{deleteCartItem(x)}}>Remove from Cart</Button></td>
                        </tr>
                    )
                  })}
              </tbody>
          </Table> : <h1>No Items found in the cart</h1>}
    </div>
  )
}

export default Cart