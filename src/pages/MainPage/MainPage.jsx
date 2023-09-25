import { Header } from "../../components/Header/Header"
import { SortAndFilter } from "../../components/SortAndFilter/SortAndFilter"
import { ProductListSection } from "../../components/ProductListSection/ProductListSection"

export const MainPage = ({
        header,
        user,
        isMobileSize,
        filterAndSort,
        productList,
        OpenAccountSection,
        OpenCartSection,
        HandleSignOut,
        SubtractAmountInCart,
        AddAmountInCart,
        DeleteItemInCart,
        HandleChangePriceRange,
        FilterByRange,
        OpenCategoryFilter,
        GetFilter,
        SortByPopularity,
        OpenSortOptions,
        SortByPrice,
        SortByAlphabet }) => {
    return (
        <div id="main-page">
            <Header
                header={header}
                user={user}
                isMobileSize={isMobileSize}
                productList={productList}
                OpenAccountSection={OpenAccountSection}
                OpenCartSection={OpenCartSection}
                HandleSignOut={HandleSignOut}
                SubtractAmountInCart={SubtractAmountInCart}
                AddAmountInCart={AddAmountInCart}
                DeleteItemInCart={DeleteItemInCart} />
            <main style={{ paddingTop: isMobileSize ? 128 : 80 }}>
                <SortAndFilter
                    isMobileSize={isMobileSize}
                    productList={productList}
                    filterAndSort={filterAndSort}
                    HandleChangePriceRange={HandleChangePriceRange}
                    FilterByRange={FilterByRange}
                    OpenCategoryFilter={OpenCategoryFilter}
                    GetFilter={GetFilter}
                    SortByPopularity={SortByPopularity}
                    OpenSortOptions={OpenSortOptions}
                    SortByPrice={SortByPrice}
                    SortByAlphabet={SortByAlphabet} />
                <ProductListSection productList={productList} />
            </main>
        </div>
    )
}