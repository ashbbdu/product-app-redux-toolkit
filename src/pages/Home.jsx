import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [productData , setProductData] = useState([])
 const [loading , setLoading] = useState(false)
  
  useEffect(() => {
    fetchProductData()
  } ,[])

  const fetchProductData = async () => {
    setLoading(true)
   try {
    const data = await fetch(API_URL);
    const result = await data.json()
    setProductData(result)
   }
   catch (e) {
    console.log(e)
   }
   setLoading(false)
  }
  return (
    <div>
      {loading ? <Spinner /> : productData.length < 0 ? "No Products Found !" : productData.map(res => {
        return (
          <Product key={res.id} data={res} />
        )
      })}
    </div>
  )
};

export default Home;
