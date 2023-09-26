import "./Header.scss"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { headerActions } from "../../redux/slice/HeaderSlice"
import { ProductInCart } from "../ProductInCart/ProductInCart"

export const Header = ({
    user,
    isMobileSize,
    header,
    productList,
    OpenCartSection,
    OpenAccountSection,
    HandleSignOut,
    SubtractAmountInCart,
    AddAmountInCart,
    DeleteItemInCart
}) => {
    const dispatch = useDispatch()
    const HandleClickOutside = (e) => {
        if (e.target.nodeName !== "HTML") {
            if (!e.target.classList.contains("avatar") && e.target.closest("div").classList.contains("account") === false) {
                dispatch(headerActions.CloseAccountSection())
            }
        }

        if (e.target.nodeName !== "HTML") {
            if (!e.target.classList.contains("cart-btn") && e.target.closest("div").classList.contains("cart-section") === false) {
                dispatch(headerActions.CloseCartSection())
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
        <header>
            <div className="logo">
                <Link to="/">
                    NP
                </Link>
            </div>
            <form id="search" action="">
                <input type="text" />
                <button type="submit">Search</button>
            </form>
            {user.isLoggedIn ? (
                <>
                    {isMobileSize ? (
                        <>
                            <div className="account">
                                <button className={"avatar " + (header.isActiveAccountSection ? "active" : "")} onClick={OpenAccountSection}></button>
                                <AnimatePresence>
                                    {header.isActiveAccountSection && (
                                        <motion.ul
                                            initial={{ opacity: 0, rotateX: -30, translateY: "100%" }}
                                            animate={{ opacity: 1, rotateX: 0, translateY: "100%" }}
                                            exit={{ opacity: 0, rotateX: -30, translateY: "100%" }}
                                            transition={{ delay: 0.1, duration: 0.2 }}>
                                                <li>
                                                    <Link to="/full-cart">
                                                        View full cart
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" onClick={HandleSignOut}>
                                                        Log out
                                                    </Link>
                                                </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="cart-section">
                                <button className="cart-btn" type="button" onClick={OpenCartSection}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                                <ProductInCart
                                    header={header}
                                    productList={productList}
                                    SubtractAmountInCart={SubtractAmountInCart}
                                    AddAmountInCart={AddAmountInCart}
                                    DeleteItemInCart={DeleteItemInCart} />
                            </div>
                            <div className="account">
                                <button className={"avatar " + (header.isActiveAccountSection ? "active" : "")} onClick={OpenAccountSection}></button>
                                <AnimatePresence>
                                    {header.isActiveAccountSection && (
                                        <motion.ul
                                            initial={{ opacity: 0, rotateX: -30, translateY: "100%" }}
                                            animate={{ opacity: 1, rotateX: 0, translateY: "100%" }}
                                            exit={{ opacity: 0, rotateX: -30, translateY: "100%" }}
                                            transition={{ delay: 0.1, duration: 0.2 }}>
                                                <li>
                                                    <Link to="/" onClick={HandleSignOut}>
                                                        Log out
                                                    </Link>
                                                </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div className="account">
                    <Link className="log-in-btn" to="/log-in">Log in</Link>
                </div>
            )}
        </header>
    )
}