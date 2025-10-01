import React from 'react'

const MenCollections = (props) => {

  console.log(props);

  return (
    <div>
      <div className="title">
        <h1>{props.GentsCollections.title}</h1>
      </div>
      <div className="imageCard">
        {
          props.GentsCollections.items.map((x) => {
            return (
              <div>
                <img src={x.image} />
                <h3>{x.price}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MenCollections