import "./SortAndFilter.scss"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import { filterAndSortActions } from "../../redux/slice/FilterAndSortSlice"

export const SortAndFilter = ({
        isMobileSize,
        filterAndSort,
        productList,
        HandleChangePriceRange,
        FilterByRange,
        OpenCategoryFilter,
        GetFilter,
        SortByPopularity,
        OpenSortOptions,
        SortByPrice,
        SortByAlphabet }) => {
    const dispatch = useDispatch()
    const categoryList = []
    productList.list && productList.list.map(product => product.category).forEach(category => {
        if (!categoryList.includes(category)) {
            categoryList.push(category)
        }
    })

    const HandleClickOutside = (e) => {
        if (e.target.nodeName !== "HTML") {
            if (!e.target.classList.contains("sort-btn") && e.target.closest("div").classList.contains("sort-section") === false) {
                dispatch(filterAndSortActions.CloseSortOption())
            }

            if (!e.target.classList.contains("chosen-option") && e.target.closest("div").classList.contains("categories") === false) {
                dispatch(filterAndSortActions.CloseCategoryFilter())
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
            <form className="price-range">    
                {productList.list && (
                    <>
                        <input type="number" value={filterAndSort.priceRange.lowest} name="lowest" onChange={HandleChangePriceRange} />
                        <input type="number" value={filterAndSort.priceRange.highest} name="highest" onChange={HandleChangePriceRange} />
                    </>
                )}
            </form>
            
            {/* categories */}
            <div className="categories">
                <button className="chosen-option" type="button" onClick={OpenCategoryFilter}>
                    {!filterAndSort.filter.isActive && (filterAndSort.filter.name[0].toUpperCase() + filterAndSort.filter.name.slice(1))}
                </button>
                <AnimatePresence>
                    {filterAndSort.filter.isActive && (
                        <motion.ul
                            initial={{ opacity: 0, rotateX: -45, translateY: "100%" }}
                            animate={{ opacity: 1, rotateX: 0, translateY: "100%" }}
                            exit={{ opacity: 0, rotateX: -45, translateY: "100%" }}
                            transition={{ duration: 0.2 }}>
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
                        </motion.ul>
                    )}
                </AnimatePresence>
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
                        <AnimatePresence>
                            {filterAndSort.isActiveSortOptions && (
                                <motion.ul
                                    initial={{ opacity: 0, rotateX: -45, translateY: "100%" }}
                                    animate={{ opacity: 1, rotateX: 0, translateY: "100%" }}
                                    exit={{ opacity: 0, rotateX: -45, translateY: "100%" }}
                                    transition={{ duration: 0.2 }}>
                                        <li>
                                            <button type="button" onClick={SortByPopularity}>Popularity</button>
                                        </li>
                                        <li>
                                            <button className={filterAndSort.priceSort.isActive ? "active" : ""} type="button" onClick={SortByPrice}>
                                                Price
                                                {filterAndSort.priceSort.isActive && (
                                                    <span><i className={"fa-solid fa-arrow-" + (filterAndSort.priceSort.isAscending ? "up" : "down")}></i></span>
                                                )}
                                            </button>
                                        </li>
                                        <li>
                                            <button className={filterAndSort.alphabetSort.isActive ? "active" : ""} type="button" onClick={SortByAlphabet}>
                                                Alphabet
                                                {filterAndSort.alphabetSort.isActive && (
                                                    <span><i className={"fa-solid fa-arrow-" + (filterAndSort.alphabetSort.isAscending ? "up" : "down")}></i></span>
                                                )}
                                            </button>
                                        </li>
                                </motion.ul>
                            )}
                        </AnimatePresence>
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