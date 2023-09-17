import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FullCartPage } from "./pages/FullCartPage/FullCartPage"
import { LogInPage } from "./pages/LogInPage/LogInPage"
import { MainPage } from "./pages/MainPage/MainPage"
import { ProductPage } from "./pages/ProductPage/ProductPage"
import { fetchProductList } from "./redux/slice/ProductListSlice"

export const App = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)

    useEffect(() => {
        dispatch(fetchProductList())
    }, [dispatch])

    console.log(productList)

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="login" element={<LogInPage />} />
                <Route path="full-cart" element={<FullCartPage />} />
                <Route path="*" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    )
}