import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addPublishRideData = createAsyncThunk("add/publishride", async (publishdata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/publisher/adddata", publishdata)
        return data.result
    } catch (error) {
        console.log(error)
    }

})

export const getAllPublishData = createAsyncThunk("get/publish", async (logindata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get("http://localhost:5000/publisher")
        return data.result

    } catch (error) {
        console.log(error)
    }

})