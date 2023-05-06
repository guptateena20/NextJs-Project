import Navbar from "../../components/Navbar"

const Product = () => {
    return (
        <>
            <Navbar />
            <div style = {{textAlign : "center", margin : "40px"}}>
                <h1 style = {{color : "#353839", margin : "10px"}}>Product Page</h1>
                <h3 style = {{color : "gray"}}>This is my Product Page</h3>
            </div>
        </>
    )
}

export default Product