import { Header } from "../../components/Header/Header"
import { SortAndFilter } from "../../components/SortAndFilter/SortAndFilter"
import { ProductListSection } from "../../components/ProductListSection/ProductListSection"

export const MainPage = ({
        user,
        isMobileSize,
        filterAndSort,
        productList,
        HandleSignOut,
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
                user={user}
                isMobileSize={isMobileSize} />
            <main style={{ paddingTop: "128px" }}>
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