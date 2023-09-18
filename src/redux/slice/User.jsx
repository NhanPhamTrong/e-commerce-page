import { createSlice } from "@reduxjs/toolkit"

export const User = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        user: {}
    },
    reducers: {
        LogIn(state) {
            state.isLoggedIn = true
        },
        LogOut(state) {
            state.isLoggedIn = false
        }
    }
})

export const userActions = User.actions