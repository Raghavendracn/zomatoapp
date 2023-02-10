import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './listing.css'
import ListingDisplay from './listingDisplay'
import { useParams } from 'react-router-dom'

const url = "http://3.17.216.66:4000/restaurant?mealtype_id=";
const Listing = (props) => {
    let params = useParams();
    let [restaurantList,setRestaurantList] = useState()
    useEffect(() => {
        let mealId = params.mealId;
        sessionStorage.setItem('mealId', mealId);
        axios.get(`${url}${mealId}`)
        .then((res)=>{
            setRestaurantList(res.data)
        })
    })
    return (
        <>
         <div className='row'>
                  <div id="mainListing">
                      <div id="filter">

                      </div>
                      <ListingDisplay listData={restaurantList}/>
                  </div>
              </div>
        </>
    )
}

export default Listing