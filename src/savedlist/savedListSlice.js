import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    saved: JSON.parse(localStorage.getItem("moviesSavedList")) || []
}

export const savedListSlice = createSlice({
    name:"savedList",
    initialState,
    reducers:{
        addToSavedList: ( state , action ) => {
            if (!state.saved.includes(action.payload)){
                state.saved.push(action.payload)
            }
        },
        removeFromSavedList: ( state , action ) => {
            state.saved = state.saved.filter((id) => id !== action.payload)
        }
    }
})

export default savedListSlice.reducer
export const { addToSavedList , removeFromSavedList } = savedListSlice.actions