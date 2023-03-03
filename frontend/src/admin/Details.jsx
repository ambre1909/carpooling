import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
export default function Details() {
    const [alldata, setAlldata] = useState()
    const { login } = useSelector(state => state.alluser)
    const [display1, setDisplay1] = useState(true)
    const [display2, setDisplay2] = useState(false)
    const [bookeddata, setBookeddata] = useState({
        driver: "",
        passenger: "",
        ridedata: "",
        seats: "",
        price: "",
        time: "",
        phoneno: "",
        from: "",
        to: "",
    })
    const { rideId, seats } = useParams()
    const [singleridedata, setSingleridedata] = useState()

    const getSingleRide = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/admin/getrides/${rideId}`)
            // email both, date time destination phone no price seats 
            setSingleridedata(data.result)
            console.log(data.result);
        } catch (error) {
            console.log(error);
        }
    }

    const handleBook = async () => {
        try {
            const { data } = await axios.post(`http://localhost:5000/book/addbookdata`, bookeddata)
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }


    const handledata = () => {
        setBookeddata({
            ...bookeddata,
            driver: singleridedata.publisher,
            passenger: login.id,
            ridedata: rideId,
            seats: seats,
            price: singleridedata.price,
            time: singleridedata.time,
            phoneno: singleridedata.phoneno,
            from: singleridedata.from,
            to: singleridedata.to
        })
    }
    // useEffect(() => {
    //     getalldataofpublisher()
    // }, [])
    // 63c8bab5e32dc15fd9c6125a
    // 63c8bab5e32dc15fd9c6125a
    useEffect(() => {
        getSingleRide()
        // setBookeddata({ ...bookeddata, ridedata: singleridedata._id })
    }, [])

    return (<>
        {/* <h1>{JSON.stringify(singleridedata)}</h1> */}





        {singleridedata && display1 &&
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card shadow-md">
                            <div class="card-header">
                                <h3>Date : {singleridedata.date}</h3>
                                <div className='b1 d-flex '>{singleridedata.time}  {singleridedata.from} </div>
                                <div className='b1'>  {singleridedata.time}  {singleridedata.to}</div>
                            </div>
                            <div class="card-body">
                                <p><span className="b1">Total Price:₹</span>{singleridedata.price}</p>
                                <p><span className='b1'>Verfied Profile :</span> John Doe</p>
                                <p><span className='b1'>phone number :</span> {singleridedata.phoneno}</p>
                                <p><span className='b1'>Message:</span>  {singleridedata.about}</p>

                            </div>
                            <button type="button" class="btn btn-primary w-100" onClick={e => { setDisplay1(false); setDisplay2(true); handledata() }}>Continue</button>

                        </div>

                    </div>
                </div>
            </div>
        }



        {singleridedata && display2 &&
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3 shadow-md">
                        <div class="card">

                            <div class="card-body">
                                <form>
                                    <div>
                                        <h3 className='mx-5'> CHECK DETAILS AND BOOK !</h3>
                                    </div>

                                    <div class="form-group">
                                        {/* <div class="card-body"> */}
                                        <p > <span className='b3' >Total Price:₹{singleridedata.price}</span></p>

                                        <div className=' d-flex' ><span  ><span className='b3'>verified profile:</span>{singleridedata.publisher}</span>
                                            <img style={{ marginLeft: 10 }} height={50} width={50} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className='rounded-circle ' alt="" srcset="" />
                                        </div>
                                        <p ><span className='b3'>pickup :</span>{singleridedata.pickup}</p>
                                        <p  ><span className='b3'>dropoff :</span>{singleridedata.dropoff}</p>
                                        <p > <span className='b3'>phone number :</span> {singleridedata.phoneno}</p>
                                        <p > <span className='b3'>Message:</span>  {singleridedata.about}</p>
                                        <h4 className='b3'> <span className=' mt-3'>Price summary </span> </h4>
                                        <div className='b3' ><span className=' mt-2'>1 seat: ₹ </span>{singleridedata.price}</div>
                                        <div className='b3' ><span className=' mt-2'>Pay in the car</span>  </div>

                                        {/* </div> */}

                                    </div>
                                </form>

                            </div>
                            <button type="button" class="btn btn-primary w-100" onClick={e => handleBook()}>Book</button>

                        </div>

                    </div>
                </div>
            </div>
        }















        {/* {singleridedata && display2 &&
            <div class="registration-form">
                <form>
                    <div>
                        <h3 className='marginauto'  > CHECK DETAILS AND BOOK !</h3>
                    </div>

                    <div class="form-group">
                        <div class="card-body">
                            <p > <span className='b3' >Total Price:₹{singleridedata.price}</span></p>

                            <div className=' d-flex' ><span  ><span className='b3'>verified profile:</span>{singleridedata.publisher}</span>
                                <img style={{ marginLeft: 10 }} height={50} width={50} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className='rounded-circle ' alt="" srcset="" />
                            </div>
                            <p ><span className='b3'>pickup :</span>{singleridedata.pickup}</p>
                            <p  ><span className='b3'>dropoff :</span>{singleridedata.dropoff}</p>
                            <p > <span className='b3'>phone number :</span> {singleridedata.phoneno}</p>
                            <p > <span className='b3'>Message:</span>  {singleridedata.about}</p>

                            <h4 className='b3'> <span className=' mt-3'>Price summary </span> </h4>
                            <div className='b3' ><span className=' mt-2'>1 seat: ₹ </span>{singleridedata.price}</div>
                            <div className='b3' ><span className=' mt-2'>Pay in the car</span>  </div>
                        </div>
                        <button type="button" class="btn btn-block create-account w-100" onClick={e => handleBook()} >Book</button>
                    </div>
                </form>

            </div>} */}



    </>

    )
}













{/* {
            singleridedata && display1 &&
            <div className="detailscard">
            <div className="container "    >
            <div className="row">
                        <div div className="col-sm-6 offset-sm-3">
                            <div class="card"  >
                                <div class="card-header">
                                    <h3>Date : {singleridedata.date}</h3>

                                    <div className='b1 d-flex '>{singleridedata.time}  {singleridedata.from} </div>
                                    <div className='b1'>  {singleridedata.time}  {singleridedata.to}</div>
                                    </div>

                                    
                                <div class="card-body">
                                <div className="b1"> <span  >Total Price:₹{singleridedata.price}</span></div>

                                <div className=' d-flex' ><span className='b1'>verified profile: {singleridedata.publisher}</span>
                                        <img style={{ marginLeft: 10 }} height={50} width={50} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className='rounded-circle ' alt="" srcset="" />
                                    </div>
                                    <p><span className='b1'>pickup :</span>{singleridedata.pickup}</p>
                                    <p><span className='b1'>dropoff :</span>{singleridedata.dropoff}</p>
                                    <p> <span className='b1'>phone number :</span> {singleridedata.phoneno}</p>
                                    <p>  {singleridedata.about}</p>
                                    </div>
                                    <div >
                                    <button type="button" class="btn btn-success w-100" onClick={e => { setDisplay1(false); setDisplay2(true); handledata() }} >Continue</button>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                } */}


{/* {
                                    singleridedata && display2 &&
                                    <div className="detailscard ">
                <div className="container "    >
                    <div className="row">
                        <div div className="col-sm-6 offset-sm-3">
                            <h1 className='text-light' >Check details and book!</h1>
                            <div class="card-body">
                                <div > <span className='b2' >Total Price:₹{singleridedata.price}</span></div>

                                <div className=' d-flex' ><span className='b3' ><span className='b2'>verified profile:</span>{singleridedata.publisher}</span>
                                    <img style={{ marginLeft: 10 }} height={50} width={50} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className='rounded-circle ' alt="" srcset="" />
                                </div>
                                <p className='b3'><span className='b2'>pickup :</span>{singleridedata.pickup}</p>
                                <p className='b3' ><span className='b2'>dropoff :</span>{singleridedata.dropoff}</p>
                                <p className='b3'> <span className='b2'>phone number :</span> {singleridedata.phoneno}</p>
                                <p className='b3'> <span className='b2'>Message:</span>  {singleridedata.about}</p>
                                <div class="progress d-flex"  >
                                    <div class="progress-bar bg-success" style={{ display: 'flex', flexDirection: 'column' }} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className='b3'> <span className='b2 mt-3'>Price summary </span> </h4>
                                    <div className='b3' ><span className='b2 mt-2'>1 seat: ₹ </span>{singleridedata.price}</div>
                                    <div className='b3' ><span className='b2 mt-2'>Pay in the car</span>  </div>
                                    <button type="button" class="btn btn-light w-100" onClick={e => handleBook()}  >Book</button>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                } */}
{/* {singleridedata && display1 &&
                                
                                
                                    <div class="registration-form mt-5">
                                        <form>
                                            <div class="form-group">
                                                <div class=""  >
                                                    <div class="card-header">
                                                        <h3>Date : {singleridedata.date}</h3>
                                                        <div className='b1 d-flex '>{singleridedata.time}  {singleridedata.from} </div>
                                                        <div className='b1'>  {singleridedata.time}  {singleridedata.to}</div>
                                                    </div>
                                                    <div class="card-body">
                                                        <p><span className="b1">Total Price:₹</span>{singleridedata.price}</p>
                                                        <p><span className='b1'>Verfied Profile :</span> John Doe</p>
                                                        <p><span className='b1'>phone number :</span> {singleridedata.phoneno}</p>
                                                        <p><span className='b1'>Message:</span>  {singleridedata.about}</p>
                                                    </div>
                                                    <div >
                                                        <button type="button" class="btn btn-block create-account w-100" onClick={e => { setDisplay1(false); setDisplay2(true); handledata() }} >Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                
                                    </div>
                                } */}