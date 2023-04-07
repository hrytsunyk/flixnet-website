import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    movies: [],
    movieById: [],
    page: null,
    loading: null,
    error: null
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll({page})
            console.log(data)
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'moviesSlice/getById',
    async ({movieId}, thunkAPI) => {
        try {
            const {data} = await moviesService.getById(movieId);
            return data

        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.loading = false;
                state.page = page;
                state.movies = results;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false;
                state.movieById = action.payload;
            })
            .addCase(getById.pending, (state, action) => {
                state.loading = true;
                state.movieById = action.payload;

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
