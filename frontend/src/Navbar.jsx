import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from './redux/userSlice'

export default function Navbar() {
    const [mode, setMode] = useState()
    const dispatch = useDispatch()
    const { login } = useSelector(state => state.alluser)
    const handleLogout = () => {
        dispatch(LogoutAction())
    }

    // useEffect(() => {
    //     setMode(document.getElementById("htmltag").hasAttribute("data-bs-theme"))
    // }, [])

    const test = () => {
        setMode(document.getElementById("htmltag").hasAttribute("data-bs-theme"))

        if (!mode) {
            document.getElementById("htmltag").removeAttribute("data-bs-theme")
            document.getElementById("btn").innerHTML = `<i class="bi bi-moon-fill "></i>`
            document.getElementById("btn").classList.add("bg-dark")
        } else if (mode) {
            document.getElementById("btn").innerHTML = ` <i class="bi bi-brightness-high-fill "></i>`
            document.getElementById("htmltag").setAttribute("data-bs-theme", "dark")
            document.getElementById("btn").classList.add("bg-light")

        }



        // setMode(document.getElementById("htmltag").hasAttribute("data-bs-theme"))
        // if (document.getElementById("htmltag").hasAttribute("data-bs-theme")) {
        //     document.getElementById("htmltag").removeAttribute("data-bs-theme")
        //     // document.getElementById("btn").classList.add("btn-dark")
        //     document.getElementById("btn").innerHTML = `<i class="bi bi-moon-fill "></i>`
        // } else {
        //     document.getElementById("btn").innerHTML = ` <i class="bi bi-brightness-high-fill "></i>`
        //     document.getElementById("htmltag").setAttribute("data-bs-theme", "dark")
        //     // document.getElementById("btn").classList.add("btn-light")
        // }

    }


    return (<>
        {/* <h3>{JSON.stringify(mode)}</h3> */}
        <nav class="navbar navbar-expand-lg navbar-bg ">
            <div class="container-fluid ">
                <Link class="navbar-brand text-light " to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mode" id="navbarNavAltMarkup">
                    <div class="navbar-nav">

                        {
                            login ? <>
                                <Link class="link fw-bold text-light" to="/dashboard" >Dashboard</Link>
                                <Link class="link fw-bold  text-light" to="/publish" >Publish Ride</Link>
                                <Link class="link fw-bold  text-light" to="/printdata" >Search rides</Link>
                                {/* <Link class="login fw-bold" to="/dummy" >dummy</Link> */}

                                <div class="dropdown">
                                    <button class="btn btn-dark dropdown-toggle ml-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                        <i class="bi bi-person-circle"></i>   {login.name}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><button onClick={e => handleLogout()} class="dropdown-item" >Log Out</button></li>
                                        <Link class="dropdown-item  text-dark" to="/publish/document" >Upload  Documents</Link>
                                        <Link class="dropdown-item  text-dark" to="/change-password" >Change Password</Link>
                                        <Link class="dropdown-item  text-dark" to="/yourrides" >Your Rides</Link>
                                    </ul>
                                </div>

                            </>
                                : <>
                                    <Link class="link fw-bold  text-light" to="/login">Login</Link>
                                    <Link class="link fw-bold  text-light" to="/register" >Register</Link>

                                </>
                        }
                    </div>
                    <div className='' style={{ marginLeft: 3 }} >
                        <button type="button"
                            id='btn'
                            onClick={test}
                            // class={`${mode == true} ` ? "btn btn-dark btn-rounded" : "btn btn-light btn-rounded"}
                            class="btn btn-dark    btn-rounded"

                        >
                            <i class="bi bi-brightness-high-fill "></i></button>

                    </div>
                </div>
            </div>
        </nav>













    </>
    )
}
