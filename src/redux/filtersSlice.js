import { createSlice } from "@reduxjs/toolkit";


const filtersInitialState = "";


const filtersSlice = createSlice({
    name: "filter",
    initialState: filtersInitialState,
    reducers: {
        handleFilter(state, action) {
           return action.payload;   
        }
    }

});

export const { handleFilter } = filtersSlice.actions; 
export const filtersReducer = filtersSlice.reducer;
