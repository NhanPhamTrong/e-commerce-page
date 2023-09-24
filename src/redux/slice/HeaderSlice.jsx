import { createSlice } from "@reduxjs/toolkit"

export const HeaderSlice = createSlice({
    name: "header",
    initialState: {
        isActiveCartSection: false,
        isActiveAccountSection: false
    },
    reducers: {
        OpenCartSection(state, action) {
            state.isActiveCartSection = !state.isActiveCartSection
        },
        CloseCartSection(state) {
            state.isActiveCartSection = false
        },
        OpenAccountSection(state, action) {
            state.isActiveAccountSection = !state.isActiveAccountSection
        },
        CloseAccountSection(state) {
            state.isActiveAccountSection = false
        }
    }
})

export const headerActions = HeaderSlice.actions