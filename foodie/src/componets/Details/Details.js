import React, {useEffect, useState}  from 'react'
import './Details.css'
import {useParams} from 'react-router-dom'
import RestaurantMenu from './RestaurantMenu'
const apiUrl=`https://prac-wfwr.onrender.com/details/`

const Details = () => {
     
  const [resDetails,setresDetails]=useState({
    details:''
  })

    let params= useParams()
    // console.log(params)
   useEffect(()=>{
    fetch(`${apiUrl}${params.id}`,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
      setresDetails({details:data})
    })
   },[])

   const detailBlock=(data)=>{
     if(data){
      return(
        data.map((item)=>{
          return(
            <div>
               <div id='mainContent'>
                  <div className='imgDiv'>
                    <img src={item.restaurant_thumb} alt={item.restaurant_name}/>
                  </div>
                  <div className="contentDiv">
                    <h2>{item.restaurant_name}</h2>
                    <span>231 Customers Say {item.rating_text}</span>
                    <h3><del>Old Price: Rs.1000</del></h3>
                    <h3>New Price: Rs.{item.cost}</h3>
                    <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                    <div className="feature_container">
                      <figure>
                        <img src="https://i.ibb.co/wJvrhYg/veg.png" className="featureIcon" />
                        <figcaption>Pure Veg</figcaption>
                      </figure>
                      <figure>
                        <img src="https://i.ibb.co/mD3jpgc/sentizied.png" className="featureIcon" />
                        <figcaption>Fully Sanitized</figcaption>
                      </figure>
                    </div>
                  </div>

               </div>
            </div>
          )
        })
      )
     }else{
      <h2>data not found</h2>
     }
  }
  return (
   
      <div>
      {detailBlock(resDetails.details)}
      <RestaurantMenu menu={params.id}/>
      </div>
      
  
  )
}

export default Details
