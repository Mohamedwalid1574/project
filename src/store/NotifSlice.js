// eslint-disable-next-line no-unused-vars
import { createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line no-unused-vars
const NotifSlice =createSlice ({
    name : "notif" ,
    initialState : {postArr : []} ,
    reducers : {
        newPost : (state , action) =>{

            state.postArr.push(action.payload)
            console.log(state.postArr);
        }
    }

})
export const {newPost} = NotifSlice.actions
export default NotifSlice.reducer ;