import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

export const FoodDisplay = ({category}) => {
    const  {food_list } = useContext(StoreContext)
  return (
    <div className='FoodDisplay' id='FoodDisplay'>
        <h2>Top Dishes bro</h2>
        <div className="food-list">
            {food_list.map((item,index)=>{
              if (category==="All" || category===item.category){ 
                // important for filter 

                return <FoodItem key={index} id={item._id} name={item.name} description={item.description}  price={item.price} image={item.image}/>
              }
            })}
        </div>
    </div>
  )
}
