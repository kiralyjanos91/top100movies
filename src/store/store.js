import { configureStore } from "@reduxjs/toolkit";
import moviesListSlice from "../movieslist/moviesListSlice";
import savedListSlice from "../savedlist/savedListSlice";

export const store =  configureStore({
    reducer:{
        moviesList:moviesListSlice,
        savedList: savedListSlice
    }
})