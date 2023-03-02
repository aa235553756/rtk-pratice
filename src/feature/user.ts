import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  age: 0,
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initialState
  },
  reducers: {
    logIn: (state, action) => {
      state.value = action.payload
    },
    logOut: (state) => {
      state.value = initialState
    }
  },
})

export const { logIn } = userSlice.actions
export const { logOut } = userSlice.actions
export default userSlice.reducer