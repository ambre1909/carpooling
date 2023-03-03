import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk("add/user", async (userdata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/users/register", userdata)
        localStorage.setItem("blahlogin", JSON.stringify(data.result))
        return data.result
    } catch (error) {
        console.log(error)
    }

})

export const userLoginAction = createAsyncThunk("login/user", async (logindata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/users/login", logindata)
        localStorage.setItem("blahlogin", JSON.stringify(data.result))
        return data.result
    } catch (error) {
        console.log(error)
    }

})

export const getAllUsers = createAsyncThunk("get/users", async (logindata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get("http://localhost:5000/users")
        return data.result

    } catch (error) {
        console.log(error)
    }

})


export const updateUser = createAsyncThunk("update/user", async (updateddata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.put(`http://localhost:5000/users/${updateddata._id}`, updateddata)
        return data.result

    } catch (error) {
        console.log(error)
    }

})

export const updatepassword = createAsyncThunk("password/user", async (update, { rejectWithValue, getState }) => {
    try {
        console.warn(update)
        const { data } = await axios.put(`http://localhost:5000/users/updatepass/${update.id}`, { password: update.password })
        console.log("from action");
        return data.result

    } catch (error) {
        console.log(error)
    }

})

