import { Header } from "../../components/Header/Header"
import { ProductDetail } from "../../components/ProductDetail/ProductDetail"

export const ProductPage = ({
    header,
    user,
    isMobileSize,
    productList,
    OpenAccountSection,
    HandleSignOut
}) => {
    return (
        <div id="product-page">
            <Header
                header={header}
                user={user}
                isMobileSize={isMobileSize}
                OpenAccountSection={OpenAccountSection}
                HandleSignOut={HandleSignOut} />
            <main style={{ paddingTop: isMobileSize ? 128 : 80 }}>
                <ProductDetail
                    productList={productList} />
            </main>
        </div>
    )
}