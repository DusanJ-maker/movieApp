import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: {}
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.userInfo = payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser } = authSlice.actions;
export const stateUser = (state) => state.auth.userInfo;
export default authSlice.reducer