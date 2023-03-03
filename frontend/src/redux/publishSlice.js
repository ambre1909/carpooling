import { createSlice } from "@reduxjs/toolkit";
import { addPublishRideData, getAllPublishData } from "./PublishAction";

const PublishSlice = createSlice({
    name: "publisher",
    initialState: { publishData: [] },
    reducers: {
        // ithe ase operations perform hotat jyamadhe axios che calls nhi krt
    },
    extraReducers: builder => {
        builder
            // to add data
            .addCase(addPublishRideData.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addPublishRideData.fulfilled, (state, { payload }) => {
                state.loading = false
                state.PublishRideAdded = true
            })
            .addCase(addPublishRideData.rejected, (state, { payload }) => {
                state.loading = false
                state.addPublisherror = payload
            })

            .addCase(getAllPublishData.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getAllPublishData.fulfilled, (state, { payload }) => {
                state.loading = false
                state.publishData = payload
            })
            .addCase(getAllPublishData.rejected, (state, { payload }) => {
                state.loading = false
                state.getPublisherror = payload
            })
    }
})

export default PublishSlice.reducer
