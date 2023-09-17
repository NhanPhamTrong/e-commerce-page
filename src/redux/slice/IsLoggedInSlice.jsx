import { createSlice } from "@reduxjs/toolkit"

export const IsLoggedInSlice = createSlice({
    name: "is logged in",
    initialState: {
        isLoggedIn: false
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

export const IsLoggedInActions = IsLoggedInSlice.actions