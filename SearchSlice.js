import { createSlice } from "@reduxjs/toolkit";


const searchslide = createSlice ({

    name : "search",

    initialState : {


    },

    reducers : {

        cacheresult : (state ,action) => {

            state = Object.assign(state , action.payload)
        }
    }
})



export default searchslide.reducer;


export const {cacheresult} = searchslide.actions;