import React from 'react'
import { useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { addPublishRideData } from '../redux/PublishAction';
import { useDispatch, useSelector } from 'react-redux';
export default function Publish() {
    const dispatch = useDispatch()
    const { login } = useSelector(state => state.alluser)
    const [display1, setDisplay1] = useState(true)
    const [display2, setDisplay2] = useState(false)
    const [display3, setDisplay3] = useState(false)
    const [display4, setDisplay4] = useState(false)


    const formik = useFormik({
        initialValues: {
            from: "abad",
            to: "sangamaner",
            passenger: "0",
            pickup: "bus stand",
            dropoff: "fake street",
            route: "xyz",
            addpasseanger: "no",
            date: "",
            time: "",
            pickuptime: "",
            price: "100",
            phoneno: "123456789",
            about: "lorem ipsum",
            instant: false,
            endtime: "",
            smoking: false,
            pets: false,
        },
        validationSchema: yup.object({
            from: yup.string("string is required").required("please enter start location "),
            to: yup.string("string is required").required("please enter end location "),
            passenger: yup.string("string is required").required("please enter number of passenger "),
            pickup: yup.string("string is required").required("please enter pickup location "),
            dropoff: yup.string("string is required").required("please enter dropoff location "),
            route: yup.string("string is required").required("please enter route  "),
            addpasseanger: yup.string("string is required").required("you want to add another passenger   "),
            date: yup.string("string is required").required("please enter date of  travel day   "),
            time: yup.string("string is required").required("please enter time of  travel day   "),
            pickuptime: yup.string("string is required").required("please enter  pickup time  of  travel day   "),
            price: yup.string("string is required").required("please enter price   "),
            phoneno: yup.string("string is required").required("please enter phone number  "),
            about: yup.string("string is required").required("please enter description  about  your ride "),
            instant: yup.string(),
            endtime: yup.string("string is required").required("please enter at  What time will you arrive ? "),
            smoking: yup.string(),
            pets: yup.string()



        }),
        onSubmit: (values, { resetForm }) => {
            // console.log({ ...values, publisher: login.id });
            // const fd = new FormData()
            // fd.append("from", values.from)
            // fd.append("to", values.to)
            dispatch(addPublishRideData({ ...values, publisher: login.id }))
            resetForm()
        }
    })



    return (<>
        {/* <h1>{JSON.stringify(formik.errors, null, 2)}</h1> */}
        <div className='mt-5'>
            <form onSubmit={formik.handleSubmit}   >
                <div class="container mt-3 " id='publishcard1' >
                    <div class="row">
                        <div class="col-sm-10 col-md-9 col-lg-6  col-xs-10 offset-sm-3 ">
                            {
                                display1 && <>
                                    <div class="card">
                                        <div class="card-header">Publish a Ride</div>
                                        <div class="card-body">
                                            <div>
                                                <label for="name" class="form-label">From</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="from"
                                                    name="from"
                                                    value={formik.values.from}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    // className={error.userName && 'form-control  is-invalid'}
                                                    className={
                                                        formik.errors.from && formik.touched.from
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <label for="name" class="form-label">To</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="To"
                                                    name="to"
                                                    value={formik.values.to}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.to && formik.touched.to
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <label for="name" class="form-label">Passenger</label>
                                                <select class="form-select" name='passenger'
                                                    value={formik.values.passenger}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.passenger && formik.touched.passenger
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                >
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label for="name" class="form-label">Pick up</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="Pick up"
                                                    name='pickup'
                                                    value={formik.values.pickup}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.pickup && formik.touched.pickup
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <label for="name" class="form-label">Drop off</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="Drop off "
                                                    name='dropoff'
                                                    value={formik.values.dropoff}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.dropoff && formik.touched.dropoff
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <label for="name" class="form-label">Route</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="Route  "
                                                    name='route'
                                                    value={formik.values.route}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.route && formik.touched.route
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>

                                            <button type="button" class="btn btn-success w-100 mt-3" onClick={e => { setDisplay2(true); setDisplay1(false) }}  >
                                                Next
                                            </button>
                                            {/* <p class="text-center mt-3">
                                        Already Have Account? <a href="#">Login</a>
                                    </p> */}
                                        </div>
                                    </div>
                                </>
                            }

                        </div>
                    </div>
                </div>




                {
                    display2 && <>

                        <div class="container my-1">
                            <div class="row">
                                <div class="col-sm-6 offset-sm-3">
                                    <div class="card">
                                        <div class="card-header">Publish a Ride</div>
                                        <div class="card-body">
                                            <div>
                                                <label for="name" class="form-label">Do You Want to add another passenger ?</label>
                                                <select class="form-select" name='addpasseanger'
                                                    value={formik.values.addpasseanger}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.addpasseanger && formik.touched.addpasseanger
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                >
                                                    <option selected>Open this select menu</option>
                                                    <option value="yes">yes</option>
                                                    <option value="no">no</option>

                                                </select>
                                            </div>

                                            <div>
                                                <label for="name" class="form-label">When are you going ?</label>
                                                <input
                                                    type="date"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="date  "
                                                    name='date'
                                                    value={formik.values.date}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.date && formik.touched.date
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <label for="name" class="form-label">Time</label>
                                                <input
                                                    type="time"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="time  "
                                                    name='time'
                                                    value={formik.values.time}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.time && formik.touched.time
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <label for="name" class="form-label">At What time will you pick passenger up </label>
                                                <input
                                                    type="time"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="time  "
                                                    name='pickuptime'
                                                    value={formik.values.pickuptime}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.pickuptime && formik.touched.pickuptime
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>

                                            <button type="button" class="btn btn-success w-100 mt-3" onClick={e => { setDisplay2(false); setDisplay1(false); setDisplay3(true) }}  >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>


                }

                {
                    display3 && <>

                        <div class="container my-1">
                            <div class="row">
                                <div class="col-sm-6 offset-sm-3">
                                    <div class="card">
                                        <div class="card-header">Publish a Ride</div>
                                        <div class="card-body">

                                            <div>
                                                <label for="name" class="form-label">Set your price per seat </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="price  "
                                                    name='price'
                                                    value={formik.values.price}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.price && formik.touched.price
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <label for="name" class="form-label">phone number </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="phone number "
                                                    name='phoneno'
                                                    value={formik.values.phoneno}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.phoneno && formik.touched.phoneno
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <label for="name" class="form-label">Anything to add about your ride? </label>
                                                <textarea
                                                    value={formik.values.about}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.about && formik.touched.about
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                    name="about" class="form-control" id="" cols="30" rows="5" placeholder="about your ride "></textarea>
                                            </div>


                                            {/* 
                                            <div>
                                                <label for="name" class="form-label"> book instantly? </label>
                                                <select class="form-select" name='instant'
                                                    value={formik.values.instant}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.instant && formik.touched.instant
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                >
                                                    <option selected>Open this select menu</option>
                                                    <option value="yes">yes</option>
                                                    <option value="no">no</option>


                                                </select>
                                            </div> */}

                                            {/* <div class="form-check form-switch my-3">
                                                <input
                                                    className={
                                                        formik.errors.instant && formik.touched.instant
                                                            ? "form-check-input is-invalid"
                                                            : "form-check-input"
                                                    }
                                                    value={formik.values.instant}
                                                    checked={formik.values.instant}
                                                    name="instant"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    type="checkbox"
                                                    role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label" for="flexSwitchCheckDefault">Can passengers book instantly? </label>
                                            </div> */}

                                            <div class="form-check form-switch">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value={formik.values.instant}
                                                    checked={formik.values.instant}
                                                    name="instant"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                    role="switch"
                                                    id="flexSwitchCheckDefault" />
                                                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                                            </div>











                                            <button type="button" class="btn btn-success w-100 mt-3" onClick={e => { setDisplay2(false); setDisplay1(false); setDisplay3(false); setDisplay4(true) }}  >
                                                Next
                                            </button>
                                            {/* setDisplay2(false); setDisplay1(false); */}







                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>


                }

                {
                    display4 && <>

                        <div class="container my-1">
                            <div class="row">
                                <div class="col-sm-6 offset-sm-3">
                                    <div class="card">
                                        <div class="card-header">Publish a Ride</div>
                                        <div class="card-body">
                                            <div>
                                                <label for="name" class="form-label"> What time will you arrive ? </label>
                                                <input
                                                    type="time"
                                                    placeholder=" What time will you arrive"
                                                    name='endtime'
                                                    value={formik.values.endtime}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={
                                                        formik.errors.endtime && formik.touched.endtime
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                            </div>

                                            <div class="form-check form-switch my-3">
                                                <input
                                                    className={
                                                        formik.errors.smoking && formik.touched.smoking
                                                            ? "form-check-input is-invalid"
                                                            : "form-check-input"
                                                    }
                                                    value={formik.values.smoking}
                                                    checked={formik.values.smoking}
                                                    name="smoking"
                                                    onChange={formik.handleChange}
                                                    type="checkbox"
                                                    role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label" for="flexSwitchCheckDefault">Is Smoking Allowed? </label>
                                            </div>

                                            <div class="form-check form-switch my-3">
                                                <input
                                                    className={
                                                        formik.errors.pets && formik.touched.pets
                                                            ? "form-check-input is-invalid"
                                                            : "form-check-input"
                                                    }
                                                    value={formik.values.pets}
                                                    checked={formik.values.pets}
                                                    name="pets"
                                                    onChange={formik.handleChange}
                                                    type="checkbox"
                                                    role="switch" id="flexSwitchCheckDefault" />
                                                <label class="form-check-label" for="flexSwitchCheckDefault">Is Pets Allowed? </label>
                                            </div>



                                            <button type="submit" class="btn btn-success w-100 mt-3"   >
                                                Publish Ride
                                            </button>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </>


                }


            </form>
        </div>













    </>

    )
}
