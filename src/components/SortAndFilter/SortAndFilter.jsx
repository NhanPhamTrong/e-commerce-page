import "./SortAndFilter.scss"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { filterAndSortActions } from "../../redux/slice/FilterAndSortSlice"

export const SortAndFilter = ({
        isMobileSize,
        filterAndSort,
        productList,
        FilterByRange,
        OpenCategoryFilter,
        GetFilter,
        SortByPopularity,
        OpenSortOptions,
        SortByPrice,
        SortByAlphabet }) => {
    const dispatch = useDispatch()
    const maxPrice = productList.list && Math.max(...productList.list.map(product => product.price))
    const categoryList = []
    productList.list && productList.list.map(product => product.category).forEach(category => {
        if (!categoryList.includes(category)) {
            categoryList.push(category)
        }
    })

    const HandleClickOutside = (e) => {
        if (e.target.nodeName !== "HTML") {
            if (!e.target.classList.contains("chosen-option") && e.target.closest("div").classList.contains("categories") === false) {
                dispatch(filterAndSortActions.CloseCategoryFilter())
            }
        }

        if (e.target.nodeName !== "HTML") {
            if (!e.target.classList.contains("sort-btn") && e.target.closest("div").classList.contains("sort-section") === false) {
                dispatch(filterAndSortActions.CloseSortOption())
            }
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", HandleClickOutside)
        return (() => {
            document.removeEventListener("mousedown", HandleClickOutside)
        })
    })

    return (
        <div id="sort-and-filter">
            {/* price range */}
            <div className="range-price">
                {maxPrice > 0 && (
                    <>
                        <p>0</p>
                        <input type="range" min="0" max={Math.ceil(maxPrice / 100) * 100} defaultValue={maxPrice} onChange={FilterByRange} />
                        <p>{Math.ceil(maxPrice / 100) * 100}</p>
                    </>
                )}
            </div>
            
            {/* categories */}
            <div className="categories">
                <button className="chosen-option" type="button" onClick={OpenCategoryFilter}>
                    {!filterAndSort.filter.isActive && (filterAndSort.filter.name[0].toUpperCase() + filterAndSort.filter.name.slice(1))}
                </button>
                <ul>
                    {filterAndSort.filter.isActive && (
                        <>
                            <li>
                                <button type="button" name="all" onClick={GetFilter}>All</button>
                            </li>
                            {categoryList.map((category, index) => (
                                <li key={index}>
                                    <button type="button" name={category} onClick={GetFilter}>{category[0].toUpperCase() + category.slice(1)}</button>
                                </li>
                            ))}
                        </>
                    )}
                </ul>
            </div>

            {isMobileSize ? (
                <>
                    {/* price */}
                    {/* alphabet */}
                    {/* popularity */}
                    <div className="sort-section">
                        <button className="sort-btn" type="button" onClick={OpenSortOptions}>
                            <span><i className="fa-solid fa-sort"></i></span>
                        </button>
                        {filterAndSort.isActiveSortOptions && (
                            <ul>
                                <li>
                                    <button type="button">
                                        Not sort
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={SortByPopularity}>Popularity</button>
                                </li>
                                <li>
                                    <button type="button" onClick={SortByPrice}>
                                        Price
                                        <span><i className="fa-solid fa-arrow-up"></i></span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={SortByPrice}>
                                        Price
                                        <span><i className="fa-solid fa-arrow-down"></i></span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={SortByAlphabet}>
                                        Alphabet
                                        <span><i className="fa-solid fa-arrow-up"></i></span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={SortByAlphabet}>
                                        Alphabet
                                        <span><i className="fa-solid fa-arrow-down"></i></span>
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </>
            ) : (
                <>
                    {/* popularity */}
                    <div id="sort-popularity">
                        <button className={filterAndSort.isPopularitySort ? "active" : ""} type="button" onClick={SortByPopularity}>Popularity</button>
                    </div>

                    {/* price */}
                    <div id="sort-price">
                        <button className={filterAndSort.priceSort.isActive ? "active" : ""} type="button" onClick={SortByPrice}>
                            Price
                            {filterAndSort.priceSort.isActive && (
                                <span><i className={"fa-solid fa-arrow-" + (filterAndSort.priceSort.isAscending ? "up" : "down")}></i></span>
                            )}
                        </button>
                    </div>
                    
                    {/* alphabet */}
                    <div id="sort-alphabet">
                        <button className={filterAndSort.alphabetSort.isActive ? "active" : ""} type="button" onClick={SortByAlphabet}>
                            Alphabet
                            {filterAndSort.alphabetSort.isActive && (
                                <span><i className={"fa-solid fa-arrow-" + (filterAndSort.alphabetSort.isAscending ? "up" : "down")}></i></span>
                            )}
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}