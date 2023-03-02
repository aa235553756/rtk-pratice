import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    value: ''
  },
  reducers: {
    chageColor: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { chageColor } = colorSlice.actions
export default colorSlice.reducer
