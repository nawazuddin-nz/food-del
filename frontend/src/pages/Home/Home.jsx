import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import { FoodDisplay } from '../../components/foodDisplay/FoodDisplay';
import { Header } from '../../components/Header/Header'
import  AppDownload  from '../../components/App-download/AppDownload'
import './Home.css'
import React, { useState } from 'react'

const Home = () => {
  
  const [category,setCategory] = useState("All");

  return (
    <div >
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home