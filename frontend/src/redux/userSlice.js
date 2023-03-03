import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, registerUser, updatepassword, updateUser, userLoginAction } from "./userAction";

const initialData = localStorage.getItem("blahlogin")
    ? JSON.parse(localStorage.getItem("blahlogin"))
    : null

const userSlice = createSlice({
    name: "user",
    initialState: { users: [], login: initialData },
    reducers: {
        // ithe ase operations perform hotat jyamadhe axios che calls nhi krt
        LogoutAction(state) {
            localStorage.removeItem("blahlogin")
            state.login = null
        }
    },
    extraReducers: builder => {
        builder
            // to register
            .addCase(registerUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.login = payload
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false
                state.usererror = payload
            })
            // to login
            .addCase(userLoginAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.login = payload
            })
            .addCase(userLoginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.usererror = payload
            })
            // to login
            .addCase(getAllUsers.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getAllUsers.fulfilled, (state, { payload }) => {
                state.loading = false
                state.users = payload
            })
            .addCase(getAllUsers.rejected, (state, { payload }) => {
                state.loading = false
                state.usererror = payload
            })
            // update data
            .addCase(updateUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userupdated = true
            })
            .addCase(updateUser.rejected, (state, { payload }) => {
                state.loading = false
                state.updateUsererror = payload
            })
            // update password
            .addCase(updatepassword.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updatepassword.fulfilled, (state, { payload }) => {
                state.loading = false
                state.passwordupdated = true
            })
            .addCase(updatepassword.rejected, (state, { payload }) => {
                state.loading = false
                state.updateUsererror = payload
            })
    }
})

export default userSlice.reducer
export const { LogoutAction } = userSlice.actions