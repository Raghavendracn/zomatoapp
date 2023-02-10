import React, { useEffect } from 'react';
import axios from 'axios';
import './Details.css';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Menu from './menuDisplay';

const url = "http://3.17.216.66:4000/details";
const menuUrl = "http://3.17.216.66:4000/menu";

const Details = () => {
     useEffect(()=>{
   

    })
    return( <div className="main">
                <div className="tileImage">
                        <div className="imageClass">
                            <img src={details.restaurant_thumb}/>
                        </div>
                    </div>
                    <div className="tileContent">
                        <div className="content">
                            <h1>{details.restaurant_name}</h1>
                            <span id="cfeedback">231 Customers Rating Average</span>
                            <h3>Old Price <del>Rs. 450</del></h3>
                            <h3>Offer Price Rs. {details.cost}</h3>
                            <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="veg"/>
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="sentizied"/>
                                </div>
                            </div>
                            <Tabs>
                                <TabList>
                                    <Tab>About</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                    <h2>{details.restaurant_name}</h2>
                                    <p>
                                        {details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>{details.address}</h2>
                                    <h3>Phone: {details.contact_number}</h3>
                                </TabPanel>
                            </Tabs>
                            <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">
                                Back
                            </Link>
                            <button className="btn btn-success"
                            onClick={this.proceed}>Proceed</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="col-md-12">
                        <center><h2>Menu</h2></center>
                        <Menu menudata={this.state.menuList}
                        finalOrder={(data) => {this.addToCart(data)}}/>
                    </div>
            </div>
        )
   
}

export default Details;