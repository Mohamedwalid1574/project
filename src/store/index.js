// eslint-disable-next-line no-unused-vars
import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line no-unused-vars
import notif from "./NotifSlice";
// eslint-disable-next-line no-unused-vars
const store=configureStore ({

    reducer : {
        notif
    }
})

export default store ;
