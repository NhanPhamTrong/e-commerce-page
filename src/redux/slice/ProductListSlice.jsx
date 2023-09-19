import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProductList = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json()
})

export const ProductListSlice = createSlice({
    name: "is active",
    initialState: {
        isLoading: false,
        isError: false,
        list: []
    },
    extraReducers: builder => {
        builder.addCase(fetchProductList.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProductList.fulfilled, (state, action) => {
            state.isLoading = false
            state.list = action.payload.map(product => ({
                ...product,
                isChosenCategory: true,
                isInPriceRange: true,
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
        FilterByRange(state, action) {
            state.list = action.payload.currentList.map(product => ({
                ...product,
                isInPriceRange: product.price <= action.payload.value.highest && product.price >= action.payload.value.lowest
            }))
        },
        FilterByCategory(state, action) {
            state.list = action.payload.currentList.map(product => {
                if (action.payload.name === "all") {
                    return { ...product, isChosenCategory: true }
                }
                else {
                    if (product.category === action.payload.name) {
                        return { ...product, isChosenCategory: true }
                    }
                    else {
                        return { ...product, isChosenCategory: false }
                    }
                }
            })
        },
        SortByPopularity(state, action) {
            state.list = !action.payload.filterAndSort.isPopularitySort ?
                [...action.payload.productList.list].sort((a, b) => b.rating.count - a.rating.count) :
                [...action.payload.productList.list].sort((a, b) => a.id - b.id)
        },
        SortByPrice(state, action) {
            state.list = [...action.payload.productList.list].sort((a, b) => {
                return action.payload.filterAndSort.priceSort.isActive ? (
                    action.payload.filterAndSort.priceSort.isAscending ? (b.price - a.price) : (a.id - b.id)
                ) : (
                    a.price - b.price
                )
            })
        },
        SortByAlphabet(state, action) {
            state.list = [...action.payload.productList.list].sort((a, b) => {
                return action.payload.filterAndSort.alphabetSort.isActive ? (
                    action.payload.filterAndSort.alphabetSort.isAscending ? (a.title > b.title ? -1 : 1) : (a.id - b.id)
                ) : (
                    a.title > b.title ? 1 : -1
                )
            })
        }
    }
})

export const productListSliceActions = ProductListSlice.actions