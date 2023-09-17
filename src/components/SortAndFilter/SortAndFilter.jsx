export const SortAndFilter = ({ isMobileSize }) => {
    return (
        <div id="sort-and-filter">
            {isMobileSize ? (
                <>
                    {/* price range */}
                    <input type="range" />
                    
                    {/* categories */}
                    <select name="categories" id="categories">
                        <option value=""></option>
                    </select>

                    {/* popularity */}
                    <button type="button">Popularity</button>

                    {/* price */}
                    {/* alphabet */}
                    <div className="sort-section">
                        <button type="button"></button>
                        <ul>
                            <li>Price</li>
                            <li>Price</li>
                            <li>Alphabet</li>
                            <li>Alphabet</li>
                        </ul>
                    </div>
                </>
            ) : (
                <>
                    {/* price range */}
                    <input type="range" />

                    {/* categories */}
                    <select name="categories" id="categories">
                        <option value=""></option>
                    </select>

                    {/* popularity */}
                    <button type="button">Popularity</button>

                    {/* price */}
                    <button type="button">
                        Price
                        {/* icon */}
                    </button>
                    
                    {/* alphabet */}
                    <button type="button">
                        Alphabet
                        {/* icon */}
                    </button>
                </>
            )}
        </div>
    )
}