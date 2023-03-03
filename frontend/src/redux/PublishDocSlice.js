import { createSlice } from "@reduxjs/toolkit";
import { addDocumentOfPublish } from "./PublishDocAction";


const PublishDocs = createSlice({
    name: "PublishDoc",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(addDocumentOfPublish.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addDocumentOfPublish.fulfilled, (state, { payload }) => {
                state.loading = false
                state.PublishDocUploaded = true
            })
            .addCase(addDocumentOfPublish.rejected, (state, { payload }) => {
                state.loading = false
                state.addDocumentPublisherror = payload
            })

    }
})

export default PublishDocs.reducer
