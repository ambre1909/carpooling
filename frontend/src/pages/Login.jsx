import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLoginAction } from '../redux/userAction';
export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { login } = useSelector(state => state.alluser)
    const [logindata, setLogindata] = useState({
        email: "john@gmail.com",
        password: "123"
    })

    const handleLogin = (e) => {
        dispatch(userLoginAction(logindata))
    }
    useEffect(() => {
        if (login) {
            navigate("/dashboard")
        }
    }, [login])
    return <>
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-6 offset-md-3 ">
                    <div class="card my-2 " style={{ borderRadius: "25px", width: "500px" }}        >
                        <form class="card-body cardbody-color p-lg-5" style={{ borderRadius: "25px", height: "560px", width: "500px" }}  >
                            <h3 class="text-center text-dark ">Login</h3>

                            <div class="text-center">
                                <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                    width="200px" alt="profile" />
                            </div>

                            <div class="mb-3">
                                <input type="text"
                                    class="form-control"
                                    id="Username"
                                    aria-describedby="emailHelp"
                                    placeholder="User Name"
                                    value={logindata.email}
                                    onChange={e => setLogindata({ ...logindata, email: e.target.value })}
                                />
                            </div>
                            <div class="mb-3">
                                <input type="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="password"
                                    value={logindata.password}
                                    onChange={e => setLogindata({ ...logindata, password: e.target.value })}
                                />
                            </div>
                            <div class="text-center">
                                <button type='button'
                                    class="btn btn-dark px-5 mb-5 w-100"
                                    onClick={e => handleLogin()}
                                >Login</button>
                            </div>
                            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
                                Registered? <Link to="/register" class="text-dark fw-bold"> Create an
                                    Account</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>


    </>
}
