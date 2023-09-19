import { createSlice } from "@reduxjs/toolkit"

const removeSort = {
    isActive: false,
    isAscending: false
}

export const FilterAndSortSlice = createSlice({
    name: "filter and sort",
    initialState: {
        priceRange: {
            lowest: "",
            highest: ""
        },
        filter: {
            isActive: false,
            name: "All"
        },
        isActiveSortOptions: false,
        isPopularitySort: false,
        alphabetSort: {
            isActive: false,
            isAscending: false
        },
        priceSort: {
            isActive: false,
            isAscending: false
        }
    },
    reducers: {
        HandleChangePriceRange(state, action) {
            state.priceRange = {
                ...action.payload.filterAndSort.priceRange,
                [action.payload.inputName]: action.payload.value
            }
        },
        OpenCategoryFilter(state) {
            state.filter = {
                isActive: !state.filter.isActive,
                name: state.filter.name
            }
        },
        CloseCategoryFilter(state) {
            state.filter = {
                isActive: false,
                name: state.filter.name
            }
        },
        GetFilter(state, action) {
            state.filter = {
                isActive: false,
                name: action.payload
            }
        },
        OpenSortOption(state, action) {
            state.isActiveSortOptions = !action.payload
        },
        CloseSortOption(state) {
            state.isActiveSortOptions = false
        },
        // popularity sort
        SortByPopularity(state, action) {
            state.isPopularitySort = action.payload
            state.priceSort = removeSort
            state.alphabetSort = removeSort
        },
        // price sort
        SortByPrice(state, action) {
            state.isPopularitySort = false
            state.priceSort = {
                isActive: action.payload.isActive ? action.payload.isAscending : true,
                isAscending: !action.payload.isActive
            }
            state.alphabetSort = removeSort
        },
        // alphabet sort
        SortByAlphabet(state, action) {
            state.isPopularitySort = false
            state.priceSort = removeSort
            state.alphabetSort = {
                isActive: action.payload.isActive ? action.payload.isAscending : true,
                isAscending: !action.payload.isActive
            }
        }
    }
})

export const filterAndSortActions = FilterAndSortSlice.actions