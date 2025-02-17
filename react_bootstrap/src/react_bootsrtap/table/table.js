import React from 'react'
import Table from "react-bootstrap/Table"
import { WebData } from '../data/data';

export const Table1 = () => {
    return (
        <div style={{margin:"20px 0px"}}>
            <Table bordered hover>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>title</td>
                        <td>image</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        WebData.map(x => {
                            return (
                                <tr>
                                    <td>{x.id}</td>
                                    <td>{x.title}</td>
                                    <td><img src={x.image} width="100px" /></td>
                                    <td>{x.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
