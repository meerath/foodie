import React, { useState, useEffect } from 'react';
import './Search.css';
const lurl = 'https://prac-wfwr.onrender.com/locations';
const resUrl=`https://prac-wfwr.onrender.com/restaurants?stateId=`
const Search = () => {
  const [lData, setlData] = useState({
    location: '',
    restaurantsList:''
  });
  const renderCity = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option value={item.state_id} key={item._id}>
            {item.state}
          </option>
        );
      });
    }
  };
  const resRender=(data)=>{
    if(data){
      return data.map((item)=>{
        return(
          <option value={item.restaurant_id} key={item._id}>
           {item.restaurant_name}
        </option>
        )
      })
    }
  }
  const handleCity = (event) => {
    const stateId=event.target.value;
    fetch(`${resUrl}${stateId}`,{method:'GET'})
    .then((res)=>res.json( ))
    .then((data)=>setlData({restaurantsList:data}))
  };
  useEffect(() => {
    fetch(lurl, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setlData({ location: data });
      });
  }, []); 
  return (
    <React.Fragment>
      <div id="search">
        <div id="logo">
          <span>F!</span>
        </div>
        <div id="heading">Find Best Place Near You</div>
        <div id="dropdown">
          <select onChange={handleCity}>
            <option>----SELECT CITY----</option>
            {renderCity(lData.location)}
          </select>
          <select id="restSelect">
            <option>----SELECT Restaurants----</option>
            {resRender(lData.restaurantsList)}      
          </select>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
