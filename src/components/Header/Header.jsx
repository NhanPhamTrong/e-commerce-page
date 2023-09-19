import "./Header.scss"
import { Link } from "react-router-dom"

export const Header = ({ user, isMobileSize, HandleSignOut }) => {
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
                                    <li>
                                        <button type="button" onClick={HandleSignOut}>Log out</button>
                                    </li>
                                </ul>
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