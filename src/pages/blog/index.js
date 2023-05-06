import Link from "next/link";
import Navbar from "../../../components/Navbar"
import axios from "axios";


export const getStaticProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const data = res.data

  return {
    props: {
      data
    }
  }
}

const Blog = ({ data }) => {
  return (
    <>
      <Navbar />
      {
        data.slice(0, 10).map((item) => {
          return (
            <div key={item.id} className="ssr-styles">
              <h3>{item.id}</h3>
              <Link href = {`/blog/${item.id}`}>
                <h2>{item.title}</h2>
              </Link>
            </div>
          )
        })
      }

    </>
  )
}

export default Blog