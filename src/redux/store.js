import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";

export default configureStore({ reducer: menuSlice });
