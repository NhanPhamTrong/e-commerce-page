import { configureStore } from "@reduxjs/toolkit"
import { UserSlice } from "./slice/UserSlice"
import { IsMobileSizeSlice } from "./slice/IsMobileSizeSlice"
import { FilterAndSortSlice } from "./slice/FilterAndSortSlice"
import { HeaderSlice } from "./slice/HeaderSlice"
import { ProductListSlice } from "./slice/ProductListSlice"

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        isMobileSize: IsMobileSizeSlice.reducer,
        filterAndSort: FilterAndSortSlice.reducer,
        header: HeaderSlice.reducer,
        productList: ProductListSlice.reducer,
    }
})