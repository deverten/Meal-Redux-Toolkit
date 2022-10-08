import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

const APIURL = 'https://themealdb.com/api/json/v1/1/categories.php'


const initialState = {
  meals: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

export const getMealItems = createAsyncThunk(
  "meal/getMealItems",
  async (name, thunkAPI) => {
    try {
        const resp =  await axios(APIURL);
        console.log(resp);
       return resp.data.categories
      
      }
     
  
    catch (err) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    clearMeals: (state) => {
      state.meals = [];
    },
   
  },
  extraReducers: {
    [getMealItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getMealItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.meals = action.payload;
    },
    [getMealItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export const { clearMeals} =
  mealSlice.actions;

// console.log(cartSlice);
export default mealSlice.reducer;
