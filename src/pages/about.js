import Image from "next/image"
import Navbar from "../../components/Navbar"

const About = () => {
    return (
        <>
            <Navbar />
            <div style = {{textAlign : "center"}}>
                <h1 style = {{color : "#353839", margin : "20px"}}>About Page</h1>
                <h3 style = {{color : "gray", margin : "10px"}}>This is my About Page</h3>
                <Image src="/demo1.jpg" width="450" height="250" alt = "img">
                </Image>
            </div>


           
        </>
    )
}

export default About 