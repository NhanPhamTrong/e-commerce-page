import "./ProductInCart.scss"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"

export const ProductInCart = ({
    header,
    productList,
    SubtractAmountInCart,
    AddAmountInCart,
    DeleteItemInCart
}) => {
    const productListInCart = productList.list.filter(product => product.inCart.isInCart)

    return (
        <AnimatePresence>
            {header.isActiveCartSection && (
                <motion.div id="product-list"
                    initial={{ opacity: 0, rotateX: -30, translateY: "100%" }}
                    animate={{ opacity: 1, rotateX: 0, translateY: "100%" }}
                    exit={{ opacity: 0, rotateX: -30, translateY: "100%" }}
                    transition={{ duration: 0.2 }}>
                        <ul className={productListInCart.length > 0 ? "" : "no-item"}>
                            {productListInCart.length > 0 ? (
                                productListInCart.map((product, index) => (
                                    <li key={index}>
                                        <img src={product.image} alt={product.title} />
                                        <div className="content">
                                            <p className="title">{product.title}</p>
                                            <div className="amount-and-price">
                                                <div className="amount">
                                                    <button
                                                        type="button"
                                                        onClick={() => SubtractAmountInCart(product.id)}
                                                        disabled={product.inCart.amount === 1 ? "true" : "false"}>-</button>
                                                    <p>{product.inCart.amount}</p>
                                                    <button
                                                        type="button"
                                                        onClick={() => AddAmountInCart(product.id)}>+</button>
                                                </div>
                                                <p className="price">{"$" + (product.inCart.amount * parseInt(product.price))}</p>
                                            </div>
                                        </div>
                                        <button className="delete-btn" type="button" onClick={() => DeleteItemInCart(product.id)}></button>
                                    </li>
                            ))) : (
                                <div>
                                    No item in your cart
                                </div>
                            )}
                        </ul>
                        <Link to="/full-cart">View full cart</Link>
                </motion.div>
            )}
        </AnimatePresence>
    )
}