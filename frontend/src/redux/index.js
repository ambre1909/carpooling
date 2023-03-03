import { configureStore } from "@reduxjs/toolkit";
import PublishDocSlice from "./PublishDocSlice";
import publishSlice from "./publishSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        alluser: userSlice,
        publish: publishSlice,
        publishdoc: PublishDocSlice
    }
})
export default store