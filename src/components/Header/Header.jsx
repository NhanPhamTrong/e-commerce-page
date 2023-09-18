import "./Header.scss"
import { Link } from "react-router-dom"

export const Header = ({ user, isMobileSize }) => {
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
                                <button className="avatar"></button>
                                <ul>
                                    <li>
                                        <Link to="/full-cart">
                                            View full cart
                                        </Link>
                                    </li>
                                    <li>Log out</li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="cart-btn">
                                <button type="button">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </button>
                                <div className="cart-section">
                                    <ul>
                                        <li></li>
                                    </ul>
                                    <Link to="/full-cart">View full cart</Link>
                                </div>
                            </div>
                            <div className="account">
                                <button className="avatar"></button>
                                <ul>
                                    <li>Log out</li>
                                </ul>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div className="account">
                    <button className="log-in-btn" type="button">
                        <Link to="/log-in">Log in</Link>
                    </button>
                </div>
            )}
        </header>
    )
}