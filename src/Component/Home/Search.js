import React, { useEffect, useState } from 'react';
import './Search.css';

let Lurl = "http://3.17.216.66:4000/location"
let rurl = "http://3.17.216.66:4000/restaurant?stateId="

const Search = ()=>{

     let [restState,setRestState] = useState();
     let [restList,setRestList] = useState();
    useEffect(()=> {
        fetch(Lurl,{method:"GET"})
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setRestState(data)
        })
     },[])
     let handleCity = (event) => {
        console.log(event.target.value)
        let stateId = event.target.value
        fetch(`${rurl}${stateId}`,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRestList(data);
        })
    }

     let displayStates = (data)=>{
        if(data){
            return data.map((item)=>{
                return <option value={item.state_id} key={item.state_id}>{item.state}</option>
            })
        }
      
     }
     let displayRestaurant = (data)=>{
        if(data){
            return data.map((item)=>{
                return (
                    <option value={item.restaurant_id}
                    key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
      
     }
 return(
     <div id="search">
            <div id="logo">
                <span>D!</span>
            </div>
            <div id="heading">
                Find Best Place Near You
            </div>
            <div class="dropdown">
                <select onChange={handleCity}>
                    <option>----SELECT YOUR CITY----</option>
                    {displayStates(restState)}
                </select>
                <select id="restDrop">
                    <option>----SELECT YOUR RESTAURANTS----</option>
                   {displayRestaurant(restList)}
                </select>
            </div>
        </div>
 )   
}

export default Search