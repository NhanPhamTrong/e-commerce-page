import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FullCartPage } from "./pages/FullCartPage/FullCartPage"
import { LogInPage } from "./pages/LogInPage/LogInPage"
import { MainPage } from "./pages/MainPage/MainPage"
import { ProductPage } from "./pages/ProductPage/ProductPage"
import { fetchProductList, productListSliceActions } from "./redux/slice/ProductListSlice"
import { isMobileSizeActions } from "./redux/slice/IsMobileSizeSlice"
import { filterAndSortActions } from "./redux/slice/FilterAndSortSlice"

export const App = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const isMobileSize = useSelector(state => state.isMobileSize.isMobileSize)
    const filterAndSort = useSelector(state => state.filterAndSort)
    const header = useSelector(state => state.header)
    const productList = useSelector(state => state.productList)

    useEffect(() => {
        dispatch(fetchProductList())
    }, [dispatch])

    const handleWindowResize = () => {
        if (window.innerWidth > 768) {
            dispatch(isMobileSizeActions.GetBiggerSize())
        }
        else {
            dispatch(isMobileSizeActions.GetMobileSize())
        }
    }

    useEffect(() => {
        handleWindowResize()
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    })

    const FilterByRange = (e) => {
        dispatch(productListSliceActions.FilterByRange({
            value: e.currentTarget.value,
            currentList: productList.list
        }))
    }

    const OpenCategoryFilter = () => {
        dispatch(filterAndSortActions.OpenCategoryFilter())
    }

    const GetFilter = (e) => {
        dispatch(filterAndSortActions.GetFilter(e.currentTarget.getAttribute("name")))
        dispatch(productListSliceActions.FilterByCategory({
            name: e.currentTarget.getAttribute("name"),
            currentList: productList.list
        }))
    }

    const OpenSortOptions = () => {
        dispatch(filterAndSortActions.OpenSortOption(filterAndSort.isActiveSortOptions))
    }

    const SortByPopularity = () => {
        dispatch(filterAndSortActions.SortByPopularity(!filterAndSort.isPopularitySort))
        dispatch(productListSliceActions.SortByPopularity({
            filterAndSort: filterAndSort,
            productList: productList
        }))
    }

    const SortByPrice = () => {
        dispatch(filterAndSortActions.SortByPrice(filterAndSort.priceSort))
        dispatch(productListSliceActions.SortByPrice({
            filterAndSort: filterAndSort,
            productList: productList
        }))
    }

    const SortByAlphabet = () => {
        dispatch(filterAndSortActions.SortByAlphabet(filterAndSort.alphabetSort))
        dispatch(productListSliceActions.SortByAlphabet({
            filterAndSort: filterAndSort,
            productList: productList
        }))
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage
                    user={user}
                    isMobileSize={isMobileSize}
                    filterAndSort={filterAndSort}
                    productList={productList}
                    FilterByRange={FilterByRange}
                    OpenCategoryFilter={OpenCategoryFilter}
                    GetFilter={GetFilter}
                    SortByPopularity={SortByPopularity}
                    OpenSortOptions={OpenSortOptions}
                    SortByPrice={SortByPrice}
                    SortByAlphabet={SortByAlphabet} />} />
                <Route path="login" element={<LogInPage />} />
                <Route path="full-cart" element={<FullCartPage />} />
                <Route path="*" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    )
}