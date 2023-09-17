import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProductList = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json()
})

export const ProductListSlice = createSlice({
    name: "is active",
    initialState: {
        isLoading: false,
        list: [],
        isError: false
    },
    extraReducers: builder => {
        builder.addCase(fetchProductList.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProductList.fulfilled, (state, action) => {
            state.isLoading = false
            state.list = action.payload.map(product => ({
                ...product,
                isShow: false,
                inCart: {
                    isInCart: false,
                    amount: 0
                }
            }))
        })
        builder.addCase(fetchProductList.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true
        })
    },
    reducers: {
        
    }
})

export const ProductListSliceActions = ProductListSlice.actions