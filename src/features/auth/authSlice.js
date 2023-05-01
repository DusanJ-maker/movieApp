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
        logoutUser: (state) => {
            state.userInfo = {}
        }
    },
})


// Action creators are generated for each case reducer function
export const { addUser, logoutUser } = authSlice.actions;
export const stateUser = (state) => state.auth.userInfo;
export default authSlice.reducer