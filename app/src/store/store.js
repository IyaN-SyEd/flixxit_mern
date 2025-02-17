import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice.jsx";
import { apiSlice } from "../slices/apiSlice.jsx";
import movieReducer from "../slices/movieSlice.jsx";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    myMovie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
