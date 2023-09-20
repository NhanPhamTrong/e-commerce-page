import "./ProductListSection.scss"
import { motion, AnimatePresence } from "framer-motion"

export const ProductListSection = ({ productList }) => {
    return (
        <AnimatePresence>
            {productList.isLoading ? (
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Loading</p>
                </div>
            ) : (
                <motion.ul
                    id="product-list-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}>
                    {productList.list.filter(product => product.isInPriceRange && product.isChosenCategory).map((product, index) => (
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
                </motion.ul>
            )}
        </AnimatePresence>
    )
}