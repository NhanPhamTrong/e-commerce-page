import { configureStore } from "@reduxjs/toolkit"
import { User } from "./slice/User"
import { IsMobileSizeSlice } from "./slice/IsMobileSizeSlice"
import { FilterAndSortSlice } from "./slice/FilterAndSortSlice"
import { HeaderSlice } from "./slice/HeaderSlice"
import { ProductListSlice } from "./slice/ProductListSlice"

export const store = configureStore({
    reducer: {
        user: User.reducer,
        isMobileSize: IsMobileSizeSlice.reducer,
        filterAndSort: FilterAndSortSlice.reducer,
        header: HeaderSlice.reducer,
        productList: ProductListSlice.reducer,
    }
})