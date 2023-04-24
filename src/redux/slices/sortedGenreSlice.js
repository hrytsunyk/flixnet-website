import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    sortedByGenre: [],
    loading: null
};

const sortedGenres = createAsyncThunk(
    'sortedByGenre/sortedGenres',
    async ({page,genreId}, thunkAPI)=>{
        try {
            const {data} = await moviesService.getSortByGenre(page,genreId)
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