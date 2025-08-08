import React from 'react'
import './ExpMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
   
    <div className='explore-menu' id='Explore-menu'>
         <br />
        <h1>Explore the Menu</h1>
        <p className='explore-menu-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis vitae incidunt deseruntLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis vitae incidunt deserunt.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{

                return (
                    <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-items">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                    </div>
                )
            }
            )}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu