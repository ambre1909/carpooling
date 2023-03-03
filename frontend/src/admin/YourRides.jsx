import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { json, useParams } from 'react-router-dom'
import { useSelector } from "react-redux";

export default function YourRides() {
    const [passengerData, setPassengerData] = useState()
    const [driverData, setDriverData] = useState()
    const { login } = useSelector(state => state.alluser)
    const getSingleRide = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/admin/getallridedata/${login.id}`)
            setPassengerData(data.result.resultofpassengerride)
            setDriverData(data.result.resultofdriverride)
            // console.log(data);
            // console.log(data.result.resultofpassengerride)
            // console.log(data.result.resultofdriverride);
        } catch (error) {
            console.log(error);
        }
    }



    const getdata = async () => {

        const { data } = await axios.get(`http://localhost:5000/book`)
        console.log(data.result.result)
    }
    useEffect(() => {
        getdata()

        return () => {

        }
    }, [])






    useEffect(() => {
        getSingleRide()
    }, [])

    return (<>
        {/* <h3>{JSON.stringify(passengerData)}</h3> */}


        <div className="container mt-4"  >
            <div className="row">
                <h2 style={{ textAlign: 'center', color: "black", fontWeight: "800" }}>Your Rides</h2>
                {passengerData && <div className="col-6" style={{ marginTop: "50px" }}>
                    {passengerData.map(item =>
                        <div class="card">
                            <div class="card-header">Booked Rides</div>
                            <div class="card-body">
                                <div className='b1 d-flex '>driver<span className='b1' style={{ marginLeft: 100 }} > {login.id === item.driver._id ? "You" : item.driver.name}</span></div>
                                <div className='b1 d-flex '>passenger<span className='b1' style={{ marginLeft: 60 }} >
                                    {login.id === item.passenger._id ? "You" : item.passenger.name}
                                </span></div>
                                <div className='b1 d-flex '>price<span className='b1' style={{ marginLeft: 110 }} >₹{item.price}</span></div>
                                <div className='b1 d-flex '>ridedata<span className='b1' style={{ marginLeft: 80 }} >{item.ridedata}</span></div>
                                {/* <div className='b1'>  {item.time}  {item.to}</div> */}
                            </div>
                            <div class="card-footer">More Details</div>
                        </div>
                    )}

                </div>}
                {driverData && <div className="col-6" style={{ marginTop: "50px" }}>
                    {driverData.map(item =>
                        <div class="card" style={{ marginBottom: 10 }}>
                            <div class="card-header">Published Rides</div>
                            <div class="card-body">
                                <div className='b1 d-flex '>Date<span className='b1' style={{ marginLeft: 100 }} >{item.date}</span></div>
                                <div className='b1 d-flex '>from<span className='b1' style={{ marginLeft: 100 }} >{item.from}</span></div>
                                <div className='b1 d-flex '>to<span className='b1' style={{ marginLeft: 120 }} >{item.to}</span></div>
                                {/* <div className='b1 d-flex '>passenger<span className='b1' style={{ marginLeft: 60 }} >{item.passenger}</span></div> */}
                                <div className='b1 d-flex '>price<span className='b1' style={{ marginLeft: 100 }} >₹{item.price}</span></div>
                                <div className='b1 d-flex '>time<span className='b1' style={{ marginLeft: 100 }} >{item.time}</span></div>

                            </div>
                            <div class="card-footer"  >More Details</div>
                        </div>
                    )}

                </div>}
            </div>



        </div>
    </>

    )
}
// createdAt
// :
// "2023-01-23T14:48:39.816Z"
// driver
// :
// "63c8b9689ebb568e46dd61e5"
// passenger
// :
// "63cc27b49df071206081f352"
// price
// :
// "100"
// ridedata
// :
// "63cc05a1e68cf7f39cd06b1e"
// seats
// :
// 1
// updatedAt
// :
// "2023-01-23T14:48:39.816Z"
// __v
// :
// 0
// _id
// :
// "63ce9e4763e6656dcd7e57c5"