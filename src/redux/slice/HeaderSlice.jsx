import { createSlice } from "@reduxjs/toolkit"

export const HeaderSlice = createSlice({
    name: "header",
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

export const headerAction = HeaderSlice.actions