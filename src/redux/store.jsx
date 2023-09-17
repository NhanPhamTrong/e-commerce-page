import { configureStore } from "@reduxjs/toolkit"
import { IsLoggedInSlice } from "./slice/IsLoggedInSlice"
import { IsMobileSizeSlice } from "./slice/IsMobileSizeSlice"
import { IsActiveSlice } from "./slice/IsActiveSlice"
import { ProductListSlice } from "./slice/ProductListSlice"

export const store = configureStore({
    reducer: {
        isLoggedIn: IsLoggedInSlice.reducer,
        isMobileSize: IsMobileSizeSlice.reducer,
        isActive: IsActiveSlice.reducer,
        productList: ProductListSlice.reducer,
    }
})