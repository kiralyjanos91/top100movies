import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    last:"All"
}

const lastGenreSlice = createSlice({
    name:"lastGenre",
    initialState,
    reducers:{
        setLastGenre : ( state , action ) => { state.last = action.payload }
    }
})

export const { setLastGenre } = lastGenreSlice.actions
export default lastGenreSlice.reducer