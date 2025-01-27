// uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDrawerCollapsed: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsDrawerCollapsed: (state, action) => {
      state.isDrawerCollapsed = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
