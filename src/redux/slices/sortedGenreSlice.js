import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    sortedByGenre: [],
    loading: null
};

const sortedGenres = createAsyncThunk(
    'sortedByGenre/sortedGenres',
    async ({genreId}, thunkAPI)=>{
        try {
            const {data} = await moviesService.getSortByGenre(genreId)
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const sortedByGenre = createSlice({
    name: 'sortedByGenre',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(sortedGenres.fulfilled,(state, action)=>{
               const {results}=action.payload;
                state.loading=false;
                state.sortedByGenre=results;
            })
            .addCase(sortedGenres.pending, (state, action)=>{
                state.loading=true;
            })
    }
})

const {reducer: sortedByGenreReducer} = sortedByGenre;

const sortedGenresActions = {
    sortedGenres
}

export {
    sortedByGenreReducer,
    sortedGenresActions

}