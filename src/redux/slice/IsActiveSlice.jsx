import { createSlice } from "@reduxjs/toolkit"

export const IsActiveSlice = createSlice({
    name: "is active",
    initialState: {
        cartSection: false,
        accountSection: false
    },
    reducers: {
        OpenCartSection(state) {
            state.cartSection = true
        },
        CloseCartSection(state) {
            state.cartSection = false
        },
        OpenAccountSection(state) {
            state.accountSection = true
        },
        CloseAccountSection(state) {
            state.accountSection = false
        }
    }
})

export const IsActiveActions = IsActiveSlice.actions