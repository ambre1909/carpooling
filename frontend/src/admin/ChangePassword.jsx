import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik"
import * as yup from "yup"
import { useEffect } from 'react';



export default function ChangePassword() {
    const [idoflogin, setIdoflogin] = useState()
    const dispatch = useDispatch()
    const { login } = useSelector(state => state.alluser)
    const formik = useFormik({
        initialValues: {
            password: "",
            cpassword: "",
            // password: "123",
            // cpassword: "123",

        },
        validationSchema: yup.object({
            password: yup.string().required("please enter password").min(2, "please enter minimum two characters"),
            cpassword: yup.string().required("please confirm password").oneOf([yup.ref("password")], "password do not match"),

        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                console.log(values);
                dispatch(updatepassword({ password: values.password, id: idoflogin }))

            } catch (error) {
                seterror(error.message)

            }
        }
    })

    useEffect(() => {
        setIdoflogin(login.id)
    }, [])

    return <>
        <h1>{JSON.stringify(idoflogin)}</h1>
        <div class="container mt-4">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header text-center">Change Password</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <br />
                                <input
                                    className='form-control'
                                    type="text"
                                    required
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                    isInvalid={formik.touched.password && formik.errors.password}
                                    isValid={formik.touched.password && !formik.errors.password}
                                    placeholder="Enter Your Password" />
                                <br />

                                <input
                                    className='form-control'
                                    type="password"
                                    required
                                    name="cpassword"
                                    onChange={formik.handleChange}
                                    value={formik.values.cpassword}
                                    onBlur={formik.handleBlur}
                                    isInvalid={formik.touched.cpassword && formik.errors.cpassword}
                                    isValid={formik.touched.cpassword && !formik.errors.cpassword}
                                    placeholder="Confirm Password"
                                />
                                <br />
                                <button type='submit' class="btn btn-primary w-100">   Submit</button>
                                {/* <div class="card-footer">   <button className='btn btn-primary' type='submit' style={{}} >
                                    Submit
                                </button></div> */}
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        {/* <div className='login-box'>
            <h2>Change Password</h2>
            <form onSubmit={formik.handleSubmit}>
                <div class="user-box">
                    <input
                        type="text"
                        required
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.password && formik.errors.password}
                        isValid={formik.touched.password && !formik.errors.password}

                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback"> {formik.errors.password}</div>
                    <label>Password</label>
                </div>
                <div class="user-box">
                    <input
                        type="password"
                        required
                        name="cpassword"
                        onChange={formik.handleChange}
                        value={formik.values.cpassword}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.cpassword && formik.errors.cpassword}
                        isValid={formik.touched.cpassword && !formik.errors.cpassword}
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback"> {formik.errors.cpassword}</div>
                    <label> Change Password</label>
                </div>
                <button className='btn-dark bttn btn-color' type='submit' style={{ marginLeft: 100 }} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>
            </form>
        </div> */}




    </>
}
