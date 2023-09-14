import React from 'react'
import './RestaurantMenu.css'
import {useEffect, useState} from 'react'
import { GrCart } from "react-icons/gr";
let menuUrl=`https://prac-wfwr.onrender.com/restaurantMenu/`
const RestaurantMenu = (props) => {
    const [menuList, setMenuList]=useState({
        menuItems:''
    }
    )
    let resId =props.menu;
   useEffect(()=>{
    fetch(`${menuUrl}${resId}`,{method:'GET'})
    .then((res=>res.json()))
    .then((data)=>{
        setMenuList({menuItems:data})
    })
   },[])
   const renderMenu=(menudata)=>{
     if(menudata && menudata.length>0){
        return(
            menudata.map((items)=>{
               return(
                <div class="card" className='menuCard' style={{width: '18rem'}}>
                <img src={items.menu_image} className='imgDiv'class="card-img-top" alt="item"/>
                <div className="card-body">
                  <p className="card-text">
                    {/* <SlBasket/> */}
                    <GrCart/>

                   
                  </p>
                </div>
              </div>
               )
            }          
            )
         )
     }else{
     return(
      <h1>no data there</h1>
     )     
    }
   } 
  return (
    <div>
           <div>
              {renderMenu(menuList.menuItems)}
           </div>
           
  
      </div>
  )
}

export default RestaurantMenu
