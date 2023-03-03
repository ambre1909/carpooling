import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
    const { login } = useSelector(state => state.alluser)
    return (<>
        <header class="masthead ">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Your pick of rides at low prices</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, corrupti iure eligendi nisi et alias nam explicabo sint delectus amet quis. Sed.!</p>
                        {/* <Link class="btn btn-primary btn-xl dummy" to="/register">Get Started</Link> */}
                        {
                            login
                                ?
                                <Link to="/printdata"><button type="button" class="btn btn-light btn-lg ">Get Started</button></Link>
                                :
                                <Link to="/register"><button type="button" class="btn btn-light btn-lg ">Get Started</button></Link>

                        }

                    </div>
                </div>
            </div>
        </header>


    </>
    )
}
