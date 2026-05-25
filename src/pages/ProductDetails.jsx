import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ProductCard from "../components/ProductCard"
import SkeletonLoader from "../components/SkeletonLoader"

const ProductDetails = () => {
  const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getSingleProduct() {
      try {
        setIsLoading(true)
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
      } finally {
        setIsLoading(false)
      }
    }
    getSingleProduct()
  }, [])

  return (
    <div className="flex justify-center items-center w-full h-screen bg-blue-200">
      <div className="w-1/2 bg-white rounded-2xl ">
        {isLoading ? (
          <SkeletonLoader length={1} />
        ) : (
          <ProductCard
            title={singleProduct.title}
            image={singleProduct.image}
            price={singleProduct.price}
            category={singleProduct.category}
            description={singleProduct.description}
            rating={singleProduct.rating}
          />
        )}
      </div>
    </div>
  )
}

export default ProductDetails
