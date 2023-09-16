import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FullCartPage } from "./pages/FullCartPage/FullCartPage"
import { LogInPage } from "./pages/LogInPage/LogInPage"
import { MainPage } from "./pages/MainPage/MainPage"
import { ProductPage } from "./pages/ProductPage/ProductPage"
import { Layout } from "./pages/Layout"

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="login" element={<LogInPage />} />
                    <Route path="full-cart" element={<FullCartPage />} />
                    <Route path="*" element={<ProductPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}