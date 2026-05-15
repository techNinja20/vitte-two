import { IoMdCart } from "react-icons/io"
import { Link } from "react-router"
import { useCartContext } from "../context/CartContext"

const CartPage = () => {
  const { cart } = useCartContext()

  return (
    <div className="w-full bg-gray-300 min-h-screen w-full">
      <div className="flex justify-end items-center p-8 relative">
        <Link to="/checkout" className="bg-gray-400 rounded-full p-2  ">
          <IoMdCart size={40} />
        </Link>
        <p className="absolute font-medium text-red-500 text-3xl top-4">
          {cart.length || 0}
        </p>
      </div>

      <h1 className="text-7xl font-black text-center">Cart</h1>

      {cart.length > 0 ? (
        <div className="grid grid-cols-3 gap-6 px-6 mt-2">
          {cart.map((data) => (
            <div
              key={data.id}
              className="rounded-md drop-shadow-md border bg-white"
            >
              <div className="">
                <img
                  src={data.image}
                  alt=""
                  className="mx-auto w-[20rem] h-[40vh] "
                />
              </div>
              <div className="mt-8 px-4">
                <h2 className="text-center font-semibold text-blue-400">
                  {data.title}
                </h2>

                <div className="flex justify-between items-center mt-4 ">
                  <p>${data.category}</p>
                  <p>${data.price}</p>
                </div>

                <p className="mt-4 font-medium">quantity:{data.quantity}</p>

                {/* <div className="flex justify-center my-4">
                <button
                  onClick={() =>
                    addToCart({
                      id: data.id,
                      title: data.title,
                      price: data.price,
                      category: data.category,
                      image: data.image,
                    })
                  }
                  className="rounded-lg py-2 px-4 bg-blue-500 text-white  "
                >
                  Add to Cart
                </button>
              </div> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
                      <h3 className="font-bold text-3xl">Your cart is empty</h3>
                      
                      <IoMdCart size={550} className="animate-bounce mt-16"  />

        </div>
      )}
    </div>
  )
}

export default CartPage
