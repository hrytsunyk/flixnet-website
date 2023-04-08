import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState={
    searchedMovies:[],
    loading:null,
};


const getSearch = createAsyncThunk(
    'searchSlice/getSearch',
    async ({page,name}, thunkAPI)=>{
        try {
            const {data} = await moviesService.getSearching({page},{name});
            return data
        }catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const searchSlice= createSlice({
    name: 'searchSlice',
    initialState,
    reducers:{},
    extraReducers:builder => {

    }
})


const {reducer: searchReducer}= searchSlice;

const searchActions = {
    getSearch
};

export {
    searchActions,
    searchReducer
}