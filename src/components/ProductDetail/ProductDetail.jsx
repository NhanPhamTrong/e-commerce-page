export const ProductDetail = ({
    productList
}) => {
    const chosenProduct = productList.list.filter(product => product.isChosen)[0]

    return (
        <div id="product-detail">
            <div className="hero-image">
                <img src={chosenProduct.image} alt={chosenProduct.title} />
            </div>
            <div className="content">
                <h1 className="title">{chosenProduct.title}</h1>
                <p className="price">{"$" + chosenProduct.price}</p>
                <p className="rating">
                    <div className="stars"></div>
                    <p className="rate">{chosenProduct.rating.count}</p>
                </p>
                <hr />
                <p className="description">{chosenProduct.description}</p>
            </div>
        </div>
    )
}