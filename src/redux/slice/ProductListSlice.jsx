import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProductList = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json()
})

export const ProductListSlice = createSlice({
    name: "is active",
    initialState: {
        isLoading: true,
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
        AddItemToCart(state, action) {
            state.list = action.payload.productList.map(product => (
                {...product, inCart: {
                    isInCart: product.id === action.payload.id ? true : product.inCart.isInCart,
                    amount: product.id === action.payload.id ? 1 : product.inCart.amount
                }}
            ))
        },
        SubtractAmountInCart(state, action) {
            state.list = action.payload.productList.map(product => (
                {...product, inCart: {
                    ...product.inCart,
                    amount: product.inCart.amount - 1
                }}
            ))
        },
        AddAmountInCart(state, action) {
            state.list = action.payload.productList.map(product => (
                {...product, inCart: {
                    ...product.inCart,
                    amount: product.inCart.amount + 1
                }}
            ))
        },
        DeleteItemInCart(state, action) {
            state.list = action.payload.productList.map(product => (
                {...product, inCart: {
                    isInCart: product.id === action.payload.id ? false : product.inCart.isInCart,
                    amount: product.id === action.payload.id ? 0 : product.inCart.amount
                }}
            ))
        },
        FilterByRange(state, action) {
            const [ priceRange, productList ] = [ action.payload.priceRange, action.payload.productList ]
            const highestPrice = Math.max(...productList.map(product => product.price))
            state.list = productList.map(product => ({
                ...product,
                isInPriceRange: priceRange.lowest !== "" ? (
                    product.price <= (priceRange.highest === "" ? highestPrice : priceRange.highest) && product.price >= priceRange.lowest
                ) : (
                    priceRange.highest !== "" ? product.price <= priceRange.highest && product.price >= 0 : true
                )
            }))
        },
        FilterByCategory(state, action) {
            state.list = action.payload.productList.map(product => ({
                ...product,
                isChosenCategory: action.payload.name === "all"  ? true : action.payload.name === product.category
            }))
        },
        SortByPopularity(state, action) {
            state.list = [...action.payload.productList].sort((a, b) => (
                action.payload.filterAndSort.isPopularitySort ? (a.id - b.id) : (b.rating.count - a.rating.count)
            ))
        },
        SortByPrice(state, action) {
            state.list = [...action.payload.productList].sort((a, b) => (
                action.payload.filterAndSort.priceSort.isActive ? (
                    action.payload.filterAndSort.priceSort.isAscending ? (b.price - a.price) : (a.id - b.id)
                ) : (
                    a.price - b.price
                )
            ))
        },
        SortByAlphabet(state, action) {
            state.list = [...action.payload.productList].sort((a, b) => (
                action.payload.filterAndSort.alphabetSort.isActive ? (
                    action.payload.filterAndSort.alphabetSort.isAscending ? (a.title > b.title ? -1 : 1) : (a.id - b.id)
                ) : (
                    a.title > b.title ? 1 : -1
                )
            ))
        }
    }
})

export const productListSliceActions = ProductListSlice.actions