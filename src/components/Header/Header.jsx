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
                            <div className="cart-btn">
                                <Link to="/full-cart">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </div>
                            <div className="account">
                                <button className="avatar"></button>
                                <ul>
                                    <li>Log out</li>
                                </ul>
                            </div>
                        </>
                    ) : (
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
                    )}
                </>
            ) : (
                <Link to="/">Log in</Link>
            )}
        </header>
    )
}