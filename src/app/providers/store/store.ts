import { configureStore } from "@reduxjs/toolkit";
import { userDataAPI } from "./api/user-data";

export const store = configureStore({
  reducer: {
    [userDataAPI.reducerPath]: userDataAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userDataAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
