import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[]
}

export const moviesListSlice = createSlice({
    name:"moviesList",
    initialState,
    reducers:{
        addMovies:( state , action ) => { state.movies = action.payload }
    }
})

export const { addMovies } = moviesListSlice.actions
export default moviesListSlice.reducer