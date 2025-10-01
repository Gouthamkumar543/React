import React, { useState } from 'react'
import Header from '../SubPages/Header/Header'
import Banner from '../SubPages/Banner/Banner'
import MenCollections from '../SubPages/MenCollections/MenCollections'
import LadiesCollections from '../SubPages/LadiesCollections/LadiesCollections'
import Footer from '../SubPages/Footer/Footer'
import { Gents, Ladies } from '../SubPages/Data/Data'

const MainPage = () => {

  const [GentsCollections,useGentsCollections] = useState(Gents)
  const [GirlsCollections,useGirlsCollections] = useState(Ladies)

  // console.log(GentsCollections);

  return (
    <div>
        <Header/>
        <Banner/>
        <MenCollections GentsCollections={GentsCollections} />
        <LadiesCollections GirlsCollections={GirlsCollections}/>
        <Footer/>
    </div>
  )
}

export default MainPage