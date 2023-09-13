import { createSlice } from "@reduxjs/toolkit";


const Chatslice = createSlice ({

    name : "chat",
    initialState : {

        messages : [],

    },

    reducers : {

        addmessages : (state , action) => {

           state.messages.splice(100,1)
            state.messages.push(action.payload)
        }

    }
})



export default Chatslice.reducer;


export const {addmessages} = Chatslice.actions;