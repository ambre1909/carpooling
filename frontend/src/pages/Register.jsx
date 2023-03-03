import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from '../redux/userAction';
export default function Register() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { login } = useSelector(state => state.alluser)
    const [userdata, setUserdata] = useState({
        name: "john",
        email: "john@gmail.com",
        password: "123",
        profile: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    })


    const handleSubmit = () => {
        dispatch(registerUser(userdata))

    }
    useEffect(() => {
        if (login) {
            navigate("/login")
        }
        return () => {

        }
    }, [login])

    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div className="card-header text-center bold">Sign Up </div>
                        <div class="card-body">
                            <div>
                                <label for="name" class="form-label">First name</label>
                                <input
                                    placeholder='Your Name'
                                    type="text"
                                    class="form-control"
                                    value={userdata.name}
                                    onChange={e => setUserdata({ ...userdata, name: e.target.value })}
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="email" class="form-label">First Email</label>
                                <input type="email"
                                    placeholder='Your Email'
                                    class="form-control"
                                    value={userdata.email}
                                    onChange={e => setUserdata({ ...userdata, email: e.target.value })}
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input type="password"
                                    placeholder='Your Password'

                                    class="form-control"
                                    value={userdata.password}
                                    onChange={e => setUserdata({ ...userdata, password: e.target.value })}
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a password.</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">Profile </label>
                                <input type="profile"
                                    placeholder='Your profile'

                                    class="form-control"
                                    value={userdata.profile}
                                    onChange={e => setUserdata({ ...userdata, profile: e.target.value })}

                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a password.</div>
                            </div>

                            <button type="button" onClick={e => handleSubmit()} class="btn btn-primary w-100 mt-3">
                                Signup
                            </button>
                            <p class="text-center mt-3">
                                Already Have Account? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>




    </>
}
