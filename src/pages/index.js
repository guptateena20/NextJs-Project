import Head from "next/head"
import Navbar from "../../components/Navbar"

const index = () => {
    return (
        <>
            <Navbar />
            <Head>
                <title>
                    Index Page
                </title>
            </Head>
            <div className = "home_div">
                <h1>Hello world</h1>
                <h3>This is my Home Page</h3>
            </div>
            <style jsx>
                {`
                .home_div{
                    margin : 40px;
                    // background-color : pink;
                    text-align : center;  
                }

                h1{
                    color : #353839 ;
                    margin : 10px 0;
                }

                h3{
                    color : gray;
                }
                `}
            </style>
        </>
    )
}

export default index
