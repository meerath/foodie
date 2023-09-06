import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const reswrtMeal=`https://prac-wfwr.onrender.com/restaurants/?mealId=`
const Listing = () => {
    const [mealRes, setMealRes]=useState({
        reswrtMeal:''
    })

    let params=useParams();
    useEffect(()=>{
        let mealId=params.id;
        fetch(`${reswrtMeal}${mealId}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>setMealRes({reswrtMeal:data}) 
        ).catch((err)=>console.log)
    },[])
    const resListWrtMeal=(data)=>{
        if(data){
             return(
                data.map((items)=>{
                   return(
                    <div>
                        <h1>{items.restaurant_name}</h1>
                    </div>
                   )
                })
             )
        }
    }
  

  return (
    <div>
      {resListWrtMeal(mealRes.reswrtMeal)}
    </div>
  )
}

export default Listing
