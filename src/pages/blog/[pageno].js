import Navbar from "../../../components/Navbar"
import axios from "axios";


export const getStaticPaths = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const data = res.data

  const paths = data.map((item) => {
    return {
      params: {
        pageno: item.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.pageno
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = res.data

  return {
    props: {
      data
    }
  }
}

const userData = ({ data }) => {
  return (
    <>
      <Navbar />
      <div key={data.id} className="ssr-styles ssr-styles-inside">
        <h3>{data.id}</h3>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
      </div>
    </>
  )
}

export default userData