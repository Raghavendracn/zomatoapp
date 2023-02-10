import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import Home from './Component/Home/Home'
import Listing from './Component/listing/listingApi'


const Routing = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                
                <Route path='/' element={<Main/>}>
                <Route index path='/' element={<Home/>}/>
                <Route  path='/listing/:mealId' element={<Listing/>}/>

                </Route>
              
            </Routes>
            <Footer/>

        </BrowserRouter>
    )
}
export default Routing