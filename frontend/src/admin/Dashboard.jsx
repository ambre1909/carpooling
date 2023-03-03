import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, updateUser } from '../redux/userAction';

export default function Dashboard() {
    const { users, userupdated } = useSelector(state => state.alluser)
    const dispatch = useDispatch()
    const [selectedUser, setSelectedUser] = useState({
        name: "",
        email: "",
        password: "",
        profile: ""
    })
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return <>

        {/* <h3>{JSON.stringify(users)}</h3> */}
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-5 offset-sm-1 mt-3">
                    <div class="card">
                        <div class="card-header">header</div>
                        <div class="card-body">
                            <ul className='list-group' >


                                {
                                    users.map((item, index) =>
                                        <li
                                            className='list-group-item d-flex justify-content-between' >
                                            <img src={item.profile} alt="" srcset="" height={50} width={50} />
                                            <strong>{item.name}</strong>
                                            {/* <p>{item._id}</p> */}
                                            <button type="button" class="btn btn-outline-success"
                                                onClick={e => {
                                                    setSelectedUser(item)
                                                }} > SHOW</button>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                    </div>
                </div>


                {
                    selectedUser &&
                    <div className="col-sm-5 offset-sm-1 mt-3">
                        <div class="card">
                            <div class="card-header">Edit Personal Details</div>
                            <div class="card-body">
                                <div class="card-body">
                                    <div>
                                        <label for="email" class="form-label"> Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            placeholder="Enter  Name"
                                            value={selectedUser.name}
                                            onChange={e => setSelectedUser({ ...selectedUser, name: e.target.value })}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div>
                                        <label for="email" class="form-label"> Email</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            placeholder="Enter  Email"
                                            value={selectedUser.email}
                                            onChange={e => setSelectedUser({ ...selectedUser, email: e.target.value })}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div>
                                        <label for="email" class="form-label"> Password</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            placeholder="Enter Password"
                                            value={selectedUser.password}
                                            onChange={e => setSelectedUser({ ...selectedUser, password: e.target.value })}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please choose a username.</div>
                                    </div>
                                    <div>
                                        <label for="email" class="form-label"> Profile</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            placeholder="Enter Profile pic"
                                            value={selectedUser.profile}
                                            onChange={e => setSelectedUser({ ...selectedUser, profile: e.target.value })}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please choose a username.</div>
                                    </div>

                                    <button onClick={e => dispatch(updateUser(selectedUser))} type="button" class="btn btn-success w-100 mt-3">
                                        Save Changes
                                    </button>
                                    <p class="text-center mt-3">
                                        Dont Have Account? <a href="#">Create Account</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                }


                {
                    userupdated &&
                    <div className="col-sm-4">
                        <div class="alert alert-success">
                            changes are saved successfully !
                        </div>
                    </div>
                    //     <div class="card">
                    //         <div class="alert alert-success">
                    //             changes are saved successfully !
                    //         </div>
                    //         <div class="card-header">changes are saved successfully !</div> */}
                    //         <div class="card-body">

                    //          <h3>changes are saved successfully !</h3>
                    //         </div>
                    //     </div>
                }

            </div>
        </div>
    </>
}
