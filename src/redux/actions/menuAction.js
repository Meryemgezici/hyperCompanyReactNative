import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenu = createAsyncThunk("getMenu", async () => {
  const res = await axios.get(
    "https://raw.githubusercontent.com/Meryemgezici/JSON-Data/main/db.json"
  );

  return res.data;
});
