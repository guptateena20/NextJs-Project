import { useRouter } from "next/router"
import Navbar from "../../components/Navbar"


const ErroPage = () => {
    const router = useRouter()
    return (
        <>
            <Navbar />
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry, Page not found!</h2>
                    <p>
                        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                    </p>

                    <button onClick={() => router.push("/")}>Back to Homepage</button>

                </div>
            </div>
        </>
    )
}

export default ErroPage