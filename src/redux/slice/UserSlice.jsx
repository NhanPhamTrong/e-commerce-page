import { createSlice } from "@reduxjs/toolkit"

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        user: {}
    },
    reducers: {
        LogIn(state, action) {
            state.isLoggedIn = true
            state.user = action.payload
        },
        LogOut(state) {
            state.isLoggedIn = false
            state.user = {}
        }
    }
})

export const userActions = UserSlice.actions