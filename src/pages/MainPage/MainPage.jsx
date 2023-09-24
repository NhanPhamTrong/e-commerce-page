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
                header={header}
                user={user}
                isMobileSize={isMobileSize}
                OpenAccountSection={OpenAccountSection}
                HandleSignOut={HandleSignOut} />
            <main style={{ paddingTop: "144px" }}>
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