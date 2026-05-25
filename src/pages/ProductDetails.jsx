import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ProductCard from "../components/ProductCard"

const ProductDetails = () => {
  const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState({})

  useEffect(() => {
    async function getSingleProduct() {
      try {
        const response = await axios(
          `https://fakestoreapi.com/products/${id}`,
          {
            method: "GET",
          },
        )
        setSingleProduct(response.data)

        console.log("response:", response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getSingleProduct()
  }, [])
  return (
    <div className="flex justify-center items-center w-full h-screen bg-blue-200">
      <div className="w-1/2 bg-white rounded-2xl ">
        <ProductCard
          title={singleProduct.title}
          image={singleProduct.image}
          price={singleProduct.price}
          category={singleProduct.category}
          description={singleProduct.description}
  
        />
      </div>
    </div>
  )
}

export default ProductDetails
