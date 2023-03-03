import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addDocumentOfPublish } from '../redux/PublishDocAction';
export default function PublisherDocuments() {
    const dispatch = useDispatch()
    const [inp, setInp] = useState({
        adharNumber: "",
        photo: "",
        adharPhoto: "",
        drivingLicense: ""
    })

    const handleSubmit = () => {
        const fd = new FormData()
        fd.append("adharNumber", inp.adharNumber)
        fd.append("photo", inp.photo)
        fd.append("adharPhoto", inp.adharPhoto)
        fd.append("drivingLicense", inp.drivingLicense)
        dispatch(addDocumentOfPublish((fd)))

    }
    return <>



        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card  shadow-lg rounded">
                        <div class="card-header bg-light">
                            <form id="regForm">
                                <h1 >Personal Details </h1>

                                <div>
                                    <label for="name" class="form-label">Adhar Number</label>
                                    <input type="text" value={inp.adharNumber} onChange={e => setInp({ ...inp, adharNumber: e.target.value })} class="form-control" id="name" placeholder="Enter Adhar Number" />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div>
                                    <label for="photo" class="form-label">Photo</label>
                                    <input
                                        type="file"
                                        class="form-control"
                                        id="photo"
                                        onChange={e => {
                                            setInp({ ...inp, photo: e.target.files[0] })
                                        }}
                                        placeholder="Enter Your photo " />

                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div>
                                    <label for="adharPhoto" class="form-label">Adhar Card Photo</label>
                                    <input type="file"
                                        class="form-control"
                                        onChange={e => {
                                            setInp({ ...inp, adharPhoto: e.target.files[0] })
                                        }}
                                        id="adharPhoto"
                                        placeholder="Adhar Card Photo *only jpeg or png" />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div>
                                    <label for="drivingLicense" class="form-label">Driving License</label>
                                    <input type="file"
                                        class="form-control"
                                        onChange={e => {
                                            setInp({ ...inp, drivingLicense: e.target.files[0] })
                                        }}
                                        id="drivingLicense"
                                        placeholder="Driving License" />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button onClick={handleSubmit} type="button" id='bluebtn' class="btn btn-primary w-100 mt-4">Upload</button>
                                <div className="card-footer">
                                </div>
                                {/* <div className='d-flex'>
                                </div> */}
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>




        {/* 
        <div class="container mt-5 " >
            <div class="row d-flex justify-content-center align-items-center ">
                <div class="col-md-6 mt-5">
                    <form id="regForm">
                        <h1 id="register">Personal Details </h1>

                        <div>
                            <label for="name" class="form-label">Adhar Number</label>
                            <input type="text" value={inp.adharNumber} onChange={e => setInp({ ...inp, adharNumber: e.target.value })} class="form-control" id="name" placeholder="Enter Adhar Number" />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div>
                            <label for="photo" class="form-label">photo</label>
                            <input
                                type="file"
                                class="form-control"
                                id="photo"
                                onChange={e => {
                                    setInp({ ...inp, photo: e.target.files[0] })
                                }}
                                placeholder="Enter Your photo " />

                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div>
                            <label for="adharPhoto" class="form-label">Adhar Card Photo</label>
                            <input type="file"
                                class="form-control"
                                onChange={e => {
                                    setInp({ ...inp, adharPhoto: e.target.files[0] })
                                }}
                                id="adharPhoto"
                                placeholder="Adhar Card Photo *only jpeg or png" />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div>
                            <label for="drivingLicense" class="form-label">Driving License</label>
                            <input type="file"
                                class="form-control"
                                onChange={e => {
                                    setInp({ ...inp, drivingLicense: e.target.files[0] })
                                }}
                                id="drivingLicense"
                                placeholder="Driving License" />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div className='d-flex'>
                            <button onClick={handleSubmit} type="button" id='bluebtn' class="btn btn-outline  w-100 justify-item-center mt-4 text-light">Upload</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
 */}




    </>

}
