import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    movies: [],
    page:null,
    loading:null,
    error:null
};

const getAll =  createAsyncThunk(
    'moviesSlice/getAll',
    async (arg, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll()
            console.log(data)
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
               const {results, page}= action.payload;
                state.loading = false;
                state.page = page;
                state.movies = results;
            })
            .addCase(getAll.pending,(state, action)=>{
                state.loading=true;
            })
            .addCase(getAll.rejected,(state, action)=>{
                state.error=action.payload
            })
    }
})

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {
    getAll
}

export {
    moviesActions,
    moviesReducer
}
