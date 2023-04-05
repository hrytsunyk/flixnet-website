import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: []
};

const getAll = () => createAsyncThunk(
    'moviesSlice/getAll',
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
    }

})

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {
    getAll
}

