import { Link } from "react-router-dom"

export const Header = ({ isLoggedIn, isMobileSize }) => {
    return (
        <header>
            <Link to="/">
                <div className="logo"></div>
            </Link>
            <form action="">
                <input type="text" />
            </form>
            {isLoggedIn ? (
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
                <Link to="/">Log in</Link>
            )}
        </header>
    )
}