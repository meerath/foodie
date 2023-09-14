import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Listing.css'
import {Link} from 'react-router-dom'
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
            if(data.length>0){
                return(
                    data.map((item)=>{
                       return(
                       <Link key={item._id} to={`/details/${item.restaurant_id}`}>
                       <div id='content'>
                          <div className='item' key={item._id}>
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <img src={item.restaurant_thumb} className='Image' alt={item.restaurant_name}/>
                                    </div>
                                    
                                    <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details?restid=${item.restaurant_id}`}>
                                            {item.restaurant_name}
                                        </Link>
                                        <div className="city_name">{item.address}</div>
                                        <div className="city_name">{item.rating_text}</div>
                                        <div className="city_name">Rs. {item.cost}</div>
                                        <div className="labelDiv">
                                            <span className="label label-primary">
                                                {item.mealTypes[0].mealtype_name}
                                            </span> &nbsp;
                                            <span className="label label-info">
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <div className="labelDiv">
                                            <span className="label label-danger">
                                                {item.cuisines[0].cuisine_name}
                                            </span> &nbsp;
                                            <span className="label label-warning">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                       </div>
                       </Link>
                       )
                    })
                 )
            }else{
                <div>
                    <h2>no data found as per the filter</h2>
                </div>
            }
        }else{
            <div>
                <h2>loading</h2>
            </div>
        }
    }
  

  return (
    <div className='row'>
                <div id='filter'>
                    <center>
                         filter
                    </center>
                </div>
        <div id='content'>
            {resListWrtMeal(mealRes.reswrtMeal)}
        </div>
     
    </div>
  )
}

export default Listing
