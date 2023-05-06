import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    movieById: [],
    popular: [],
    topRated: [],
    upcomingList:[],
    page: null,
    loading: null,
    loading2: null,
    error: null
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll({page})
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

const getPopular = createAsyncThunk(
    'moviesSlice/getPopular',
    async (_, thunkAPI) => {
        try {
            const {data} = await moviesService.getPopularList();
            return data

        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getTopRated = createAsyncThunk(
    'moviesSlice/getTopRated',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getTopRatedList({page});
            return data

        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const getUpcoming = createAsyncThunk(
    'moviesSlice/getUpcoming',
    async (_, thunkAPI) => {
        try {
            const {data} = await moviesService.getUpcomingList();
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
                state.loading2 = false;
                state.movieById = action.payload;


            })
            .addCase(getById.pending, (state, action) => {
                state.loading2 = true;
            })

            .addCase(getPopular.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.popular = results;
            })

            .addCase(getTopRated.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.topRated = results;
            })

            .addCase(getUpcoming.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.upcomingList = results;
            })

    }
})

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {
    getAll,
    getById,
    getPopular,
    getTopRated,
    getUpcoming
}

export {
    moviesActions,
    moviesReducer
}
