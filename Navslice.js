import { createSlice } from "@reduxjs/toolkit";


const Navslice = createSlice ( {

    name : "App",
    initialState : {

        ismenuopenflag : true,
    }
    ,
    reducers : {

        togglemenu : (state)=> {

            state.ismenuopenflag = !state.ismenuopenflag;
        },
        closemenu : (state ) => {

            state.ismenuopenflag = false;
        }
    }
})


export default Navslice.reducer;


export const {togglemenu , closemenu} = Navslice.actions;