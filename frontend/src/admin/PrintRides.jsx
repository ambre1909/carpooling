import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function PrintRides() {

    const [sortData, setSortData] = useState({
        profile: false,
        instant: false,
        smoking: false,
        pets: false
    })

    const [allData, setAllData] = useState()
    const [finderData, setfinderData] = useState()
    const [rawData, setrawData] = useState()
    const [find, setFind] = useState({
        from: "abad",
        to: "sangamaner",
        date: "",
        seats: 1,
    })
    const handleSubmit = async (arg) => {
        try {
            const { data } = await axios.get(`http://localhost:5000/admin/getrides/?sortThis=${arg}&profile=${sortData.profile}&instant=${sortData.instant}&smoking=${sortData.smoking}&pets=${sortData.pets}&from=${find.from}&to=${find.to}&seats=${find.seats}&date=${find.date}`)
            setfinderData(data.result)

            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    const getAllRides = async () => {
        const { data } = await axios.get(`http://localhost:5000/publisher`)
        setAllData(data.result)

    }
    const filterData = () => {


        let x = rawData.filter(item => item.smoking === true)
        setfinderData(x)

    }


    useEffect(() => {
        getAllRides()

    }, [])
    console.log(finderData)

    return (<>
        {/* <h1>{JSON.stringify(finderData, null, 2)}</h1> */}


        <div className='searchbox mt-5'>
            <div class="input-group">
                <input type="text" class="form-control form-control-lg" placeholder="Leaving From..."
                    value={find.from}
                    onChange={e => setFind({ ...find, from: e.target.value })} aria-label="Username" aria-describedby="basic-addon1" />

                <input type="text" class="form-control form-control-lg" placeholder="Going To..."
                    value={find.to}
                    onChange={e => setFind({ ...find, to: e.target.value })} aria-label="Username" aria-describedby="basic-addon1" />

                <input type="date" class="form-control form-control-lg"
                    placeholder="Date"
                    value={find.date}
                    onChange={e => setFind({ ...find, date: e.target.value })}
                    aria-label="Username" aria-describedby="basic-addon1" />

                <select class="form-select form-select-lg" type="number"
                    value={find.seats}
                    onChange={e => setFind({ ...find, seats: +e.target.value })}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>

                </select>
                <button onClick={e => handleSubmit()} type="button" class="btn globalbtn btn-lg searchboxbtn"><i class="bi bi-search mx-1"></i> Search</button>
            </div>
        </div>




        <div className="container mt-3">
            <div className="row">
                <div class="d gap-2 col-sm-4 mt-5">
                    <div class="card shadow-sm">
                        <div class="alert alert-warning ">
                            Sorting
                        </div>
                        <div class="card-body space-between">

                            <div>
                                <button class="btn btn-light mx-4 mt-2" onClick={e => handleSubmit("early")} type="button">Earliest Ride</button>
                            </div>
                            <div>
                                <button class="btn btn-light mx-4 mt-2" onClick={e => handleSubmit("price")} type="button">Lowest price</button>
                            </div>
                            <div>
                                <button class="btn btn-light mx-4 mt-2" onClick={e => handleSubmit("shortest")} type="button">Shortest ride</button>
                            </div>

                        </div>

                    </div>
                </div>


                <div className="col-sm-6 offset-sm-2 ">
                    {/* <h5 className='text-center ' style={{ color: "silver" }} >{finderData && finderData.length} <span></span>Rides Available</h5> */}

                    <div class="alert alert-info mt-3 ">
                        {finderData && finderData.length}   Rides Available
                    </div>

                    {
                        finderData && finderData.map(item =>
                            <div class="card w-60  shadow-sm mb-2 mt-4">
                                <div class="card-body">

                                    <div className='b1 d-flex '>{item.time}  {item.from} <span className='b1' style={{ marginLeft: 100 }} >₹{item.price}</span></div>
                                    <div className='b1'>  {item.endtime}  {item.to}</div>


                                    <div className='b1'> Seats Available:{item.passenger}</div>
                                    <p className='b1'>Total time of ride :{item.tripTime} minutes</p>

                                    <div className='b1 d-flex align-center'><img src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} className="rounded-circle" height={50} width={50} alt="" srcset="" /><span className='b1 my-2' style={{ marginLeft: 5 }} >{item.publisher.name}</span></div>



                                    {/* 
                                    <span><img src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} className="rounded-circle" height={50} width={50} alt="" srcset="" /><div className='b1'>{item.publisher.name}</div></span> */}
                                    <Link to={`/details/${item._id}/${find.seats}`} class="btn globalbtn mt-2">Proceed</Link>



                                    {/* <Link to={`/details/${item._id}/${find.seats}/$publishername=${finderData.publisher.name}/$publisheremail=${finderData.publisher.email}`} class="btn btn-info mt-2">Proceed</Link>
 */}
                                    {/* $publishername=${finderData.publisher.name} */}




                                </div>
                            </div>
                        )
                    }


                </div>
            </div>



        </div>
















        {/* <div className="col-6">
                    <h5 className='text-center b1 ' style={{ color: "silver" }} > <span></span>Sort By</h5>
                    <div class="card p-2 mb-2 shadow-lg rounded">
                        <div>
                            <button type="button" onClick={e => handleSubmit("early")} class="btn btn-outline-info my-2 ">Earliest Depar.
                            </button>
                        </div>
                        <div>
                            <button type="button" onClick={e => handleSubmit("price")} class="btn btn-outline-info  my-2">Lowest price</button>

                        </div>
                        <div>
                            <button type="button"
                                onClick={e => handleSubmit("shortest")}
                                class="btn btn-outline-info my-2">Shortest ride</button>

                        </div>



                    </div>

                    <div class="card p-2 mb-2   shadow-lg rounded">
                        <h4>Amenities</h4>


                    </div>
                </div> */}


        {/* <div className='mb-3' > <i class="bi bi-patch-check-fill mx-1"></i><span className='b1' style={{ marginRight: 320 }}>Verified Profile</span>
                        <input id='x' class="form-check-input" type="checkbox" checked={sortData.profile}
                            onChange={e => setSortData({ ...sortData, profile: !sortData.profile })} /></div>
                    <div className='mb-3'><i class="bi bi-lightning-fill mx-1"></i><span className='b1' style={{ marginRight: 310 }}>Instant Booking</span>
                        <input id='x' class="form-check-input" type="checkbox" checked={sortData.instant}
                            onChange={e => setSortData({ ...sortData, instant: !sortData.instant })} /></div>
                    <div className='mb-3'><i class="bi bi-fire mx-1"></i><span className='b1' style={{ marginRight: 300 }}>Smoking allowed</span>
                        <input id='x' class="form-check-input" type="checkbox" checked={sortData.smoking}
                            onChange={e => setSortData({ ...sortData, smoking: !sortData.smoking })} /></div>

                    <div className='mb-3'><i class="bi bi-emoji-smile mx-1"></i><span className='b1' style={{ marginRight: 340 }}>Pets allowed</span>
                        <input id='x' class="form-check-input" type="checkbox" checked={sortData.pets}
                            onChange={e => setSortData({ ...sortData, pets: !sortData.pets })} /></div> */}
        {/* const [sortData, setSortData] = useState({
                        profile: false,
                    instant: false,
                    smoking: false,
                    pets: false
}) */}












        {/* <div className='mb-3' > <i class="bi bi-clock mx-2"></i><span className='b1' style={{ marginRight: 300 }}>Earliest departure</span>

            <input class="form-check-input"
                // value={"early"}
                onChange={e => setSortData({ ...sortData, early: e.target.checked })}
                checked={sortData.early === "early"}
                type="radio"
                name="x"

            /></div> */}


        {/* <div className='mb-3'> <i class="bi bi-currency-rupee mx-2"></i><span className='b1' style={{ marginRight: 320 }}>Lowest price</span>
                            <input
                                class="form-check-input "
                                type="radio"
                                name="x
                                "
                                value={"priced"}
                                checked={sortData.early === "priced"}
                                onChange={e => setSortData({ ...sortData, price: e.target.value })}

                            /></div> */}



        {/* 
                        <div className='mb-3'> <i class="bi bi-clock mx-2"></i><span className='b1' style={{ marginRight: 320 }}>Shortest ride</span>
                            <input
                                class="form-check-input "
                                type="radio"
                                name="name"
                                value={sortData.shortest}
                                onChange={e => setSortData({ ...sortData, shortest: e.target.value })}
                                id="name" /></div> */}












        {/* <img src="" className='rounded-circle' alt="" srcset="" /> */}
        {/* <Link to={`details/:${item._id}`} class="btn btn-info mt-2">Book</Link> */}










    </>

    )
}



    // const getdata = async () => {
    //     try {
    //         const { data } = await axios.get("http://localhost:5000/admin/getrides/?time=${}&date=${}")
    //         const { data } = await axios.get("http://localhost:5000/admin/getrides")
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }



    // useEffect(() => {
    //     getdata()
    // }, [])