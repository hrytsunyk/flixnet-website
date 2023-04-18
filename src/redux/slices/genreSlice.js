import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    genresList: [],
    loading:null
};

const getGenreList = createAsyncThunk(
    'genreSlice/getGenreList',
    async (_,thunkAPI)=>{
      try {
          const {data} = await moviesService.getGenreList();
          return data
      } catch (e) {
          thunkAPI.rejectWithValue(e.response.data)
      }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getGenreList.fulfilled, (state, action) => {
              const {genres} = action.payload;
                state.loading=false;
                state.genresList = genres;
            })
            .addCase(getGenreList.pending,(state, action)=>{
                state.loading=true;
            })
    }
})

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getGenreList
}

export {
    genreReducer,
    genreActions
}