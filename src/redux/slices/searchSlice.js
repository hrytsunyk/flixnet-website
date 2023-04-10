import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState={
    searchedMovies:[],
    page:null,
    totalPages:null,
    loading:null,
};


const getSearch = createAsyncThunk(
    'searchSlice/getSearch',
    async ({page, name}, thunkAPI)=>{
        try {
            const {data} = await moviesService.getSearching(page,name);
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
        builder
            .addCase(getSearch.fulfilled, (state, action)=>{
                const{results,page,total_pages}= action.payload

                state.searchedMovies = results;
                state.page = page;
                state.totalPages = total_pages;
                state.loading = false


            })
            .addCase(getSearch.pending, (state, action)=>{
                state.loading=true
            })
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