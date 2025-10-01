import React from 'react'

const LadiesCollections = (props) => {

    console.log(props);

  return (
    <div>
        <div className='title'>
            <h1>{props.GirlsCollections.title}</h1>
        </div>
        <div className='imageCard'>
            {
                props.GirlsCollections.items.map((x)=>{
                    return(
                        <div>
                            <img src={x.image} alt='girls'/>
                            <h3>{x.price}</h3>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default LadiesCollections