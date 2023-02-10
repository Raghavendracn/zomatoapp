import React, { useEffect, useState } from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay'

let Quickurl = "http://3.17.216.66:4000/quicksearch"
const QuickSearch = () => {
  let [mealType,setMealType] = useState();
    useEffect(()=>{
        fetch(Quickurl,{method:"GET"})
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setMealType(data);
        })
    },[])
    return (
        <div id="quickSearch">
            <span id="quickHeading">Quick Search</span>
            <span id="quickSubHeading">Find Restaurants By Meal Type</span>
            <QuickDisplay mealData={mealType}/>
        </div>
    )
}

export default QuickSearch