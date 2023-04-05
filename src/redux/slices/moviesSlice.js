import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    movies: []
};

const getAll = () => createAsyncThunk(
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
