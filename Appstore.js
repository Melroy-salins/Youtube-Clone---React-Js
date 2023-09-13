import { configureStore } from "@reduxjs/toolkit";

import Navslice from "./Navslice";
import searchslide from "./SearchSlice";
import Chatslice from "../Components/Chatslice";


const Appstore = configureStore ( {

    reducer : {
        app : Navslice,
        search :searchslide,
       chat : Chatslice
    }
    

})


export default Appstore;