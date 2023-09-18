import { createSlice } from "@reduxjs/toolkit"

export const IsMobileSizeSlice = createSlice({
    name: "is mobile size",
    initialState: {
        isMobileSize: false
    },
    reducers: {
        GetMobileSize(state) {
            state.isMobileSize = true
        },
        GetBiggerSize(state) {
            state.isMobileSize = false
        }
    }
})

export const isMobileSizeActions = IsMobileSizeSlice.actions