import axios from "axios"
import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react"

const Products = () => {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await axios("https://fakestoreapi.com/products", {
          method: "GET",
        })

        setAllProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [])

  console.log("allProducts:", allProducts)

  return (
    <div className="bg-blue-200 min-h-screen w-full ">
      <h1 className="text-center text-7xl font-bold text-white ">Products</h1>

      <div className="grid grid-cols-4 gap-6 py-8 gap- px-4">
        {allProducts.map((product) => (
          <ProductCard
            {...product}
            key={product.id}
            to={`/product/${product.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
