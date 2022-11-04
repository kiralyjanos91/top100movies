import { configureStore } from "@reduxjs/toolkit";
import moviesListSlice from "../movieslist/moviesListSlice";
import savedListSlice from "../savedlist/savedListSlice";
import lastGenreSlice from "../toplist/lastGenreSlice";

export const store =  configureStore({
    reducer:{
        moviesList:moviesListSlice,
        savedList:savedListSlice,
        lastGenre:lastGenreSlice
    }
})