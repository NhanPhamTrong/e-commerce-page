import "./ProductListSection.scss"

export const ProductListSection = ({ productList }) => {
    return (
        <ul id="product-list-section">
            {productList.list && productList.list.filter(product => product.isInPriceRange && product.isChosenCategory).map((product, index) => (
                <li key={index}>
                    <div className="image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <h1>{product.title}</h1>
                    <div className="stats">
                        <p className="price">{"$" + product.price}</p>
                        <p className="rate">{"Rate: " + product.rating.rate}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}