import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addDocumentOfPublish = createAsyncThunk("add/doc", async (document, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/userdoc/adddata", document)
        return data.result
    } catch (error) {
        console.log(error)
    }

})

// export const getAllUsers = createAsyncThunk("get/users", async (logindata, { rejectWithValue, getState }) => {
//     try {
//         const { data } = await axios.get("http://localhost:5000/users")
//         return data.result

//     } catch (error) {
//         console.log(error)
//     }

// })