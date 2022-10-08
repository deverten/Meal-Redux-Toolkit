// contains the entire state of the application

import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./Features/mealSlice";

export const store = configureStore({
  reducer: {
    meal: mealReducer,
  },
});
