import { createSlice } from "@reduxjs/toolkit";
import { getMenu } from "../actions/menuAction";

const initialState = {
  menu: [],
  selectedIndex: null,
  resetColor: false,
  isLoading: true,
  isError: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  extraReducers: (builder) => {
    // cevap beklerken
    builder
      .addCase(getMenu.pending, (state) => {
        state.isLoading = true;
      })
      // olumlu cevap geldiğinde
      .addCase(getMenu.fulfilled, (state, action) => {
        state.menu = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      // olumsuz cevap geldiğinde
      .addCase(getMenu.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        alert("üzgünüz bir hata oluştu ");
      });
  },

  reducers: {
    selectedItem: (state, action) => {
      state.resetColor = false;
      const index = state.menu.findIndex((item) => item.id === action.payload);

      state.selectedIndex = index;
      const updatedMenu = [...state.menu];

      updatedMenu.forEach((item) => {
        item.selected = false;
      });

      updatedMenu[index] = {
        ...updatedMenu[index],
        selected: true,
      };

      state.menu = updatedMenu;
    },
    resetAllColors: (state) => {
      state.resetColor = true;
    },
  },
});

export default menuSlice.reducer;
export const { selectedItem, resetAllColors } = menuSlice.actions;
