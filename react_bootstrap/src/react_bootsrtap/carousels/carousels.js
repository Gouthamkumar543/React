import React from 'react'
import Carousel from "react-bootstrap/Carousel"

export const Carousels1 = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src="https://assets.weforum.org/article/image/0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg" width="100%" />
                    <Carousel.Caption>
                        <h1 style={{color: "aqua" }}>Welcome to the nature</h1>
                        <p style={{color: "aqua" }}>Beautyfull whaether</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.aaronreedphotography.com/images/xl/Sweet-Dreams-2022.jpg" width="100%" />
                    <Carousel.Caption>
                        <h1 style={{color: "aqua" }}>Welcome to the nature</h1>
                        <p style={{color: "aqua" }}>Beautyfull whaether</p>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item>
                    <img src="https://www.datocms-assets.com/46272/1633199491-1633199490440.jpg?auto=format&fit=max&w=1200" width="100%" />
                    <Carousel.Caption>
                        <h1 style={{color: "aqua" }}>Welcome to the nature</h1>
                        <p style={{color: "aqua" }}>Beautyfull whaether</p>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item>
                    <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752" width="100%" />
                    <Carousel.Caption>
                        <h1 style={{color: "aqua" }}>Welcome to the nature</h1>
                        <p style={{color: "aqua" }}>Beautyfull whaether</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
