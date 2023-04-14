import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    genresList: []
};

const getGenreList = createAsyncThunk(
    'genreSlice/getGenreList',
    async (_,thunkAPI)=>{
      try {
          const {data} = await moviesService.getGenreList();
          console.log(data)
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
                state.genresList = genres;
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