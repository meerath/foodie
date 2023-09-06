import React,{ useState, useEffect } from 'react'
import './QuickSearch.css'
import  QuickDisplay from './QuickDisplay'
const mealUrl='https://prac-wfwr.onrender.com/meals'
const QuickSearch = () => {
  const[mdata, setMdata]=useState({
    mealUrl:''
  });
  useEffect(()=>{
    fetch(mealUrl,{method:'GET'}).then((res)=>res.json())
    .then((data)=>{
      setMdata({mealUrl:data})
    })
  },[])
  return (
    <React.Fragment>
       <div id="quickSearch">
            <span id="QuickHeading">
                Quick Search 
            </span>
            <span id="QuickSubHeading">
                Find Restaurants By MealType
            </span>
            <div class="mainTileContainer">
              <QuickDisplay mealData={mdata.mealUrl}/>    
            </div>
        </div>
    </React.Fragment>
  )
}
export default QuickSearch
