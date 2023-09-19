import { useEffect } from "react"
import { Link } from "react-router-dom"

export const LogInPage = ({ HandleCallbackResponse }) => {
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "962733085224-ptl04bvnvk25k07hvshflgl6585dj89g.apps.googleusercontent.com",
            callback: HandleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("sign-in-div"),
            {
                theme: "outline",
                size: "large"
            }
        )
    }, [HandleCallbackResponse])

    return (
        <div id="log-in-page">
            <div className="log-in-section">
                <div id="log-in-button">
                    <div id="sign-in-div"></div>
                </div>
            </div>
            <Link to="/"> Go back to home page</Link>
        </div>
    )
}