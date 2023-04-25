import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
   videoList: [],
    loading:null,
    page: null
};

const getVideoList = createAsyncThunk(
    'videoSlice/getVideoList',
    async ({movieId},thunkAPI)=>{
      try {
          const {data} = await moviesService.getVideoById(movieId);
          return data
      } catch (e) {
          thunkAPI.rejectWithValue(e.response.data)
      }
    }
)

const videoSlice = createSlice({
    name: 'videoSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getVideoList.fulfilled, (state, action) => {
                console.log(action.payload);
                const {results} = action.payload;
                state.loading=false;
                state.videoList = results;
            })
            .addCase(getVideoList.pending,(state, action)=>{
                state.loading=true;
            })
    }
})

const {reducer: videoReducer} = videoSlice;

const videoActions = {
    getVideoList
}

export {
   videoReducer,
    videoActions
}