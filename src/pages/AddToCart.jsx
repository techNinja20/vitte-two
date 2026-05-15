import { useState } from "react"

const productData = [
  {
    id: 1,
    name: "iPhone 15",
    price: 1200,
  },
  {
    id: 2,
    name: "iPhone 12",
    price: 500,
  },
  {
    id: 3,
    name: "iPhone 13",
    price: 700,
  },
  {
    id: 4,
    name: "iPhone 16",
    price: 1900,
  },
  { id: 5, name: "iPhone 17", price: 2200 },
  { id: 6, name: "iPhone 11", price: 350 },
  { id: 7, name: "iPhone xR", price: 300 },
  { id: 8, name: "iPhone 6", price: 50 },
]

const Cart = () => {
  const [cart, setCart] = useState([])

  function addTocart(product) {
    const ifExists = cart.find((el) => el.id === product.id)

    if (ifExists) {
      const updateCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
      setCart(updateCart)
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
    }
  }

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-semibold text-center">All Products</h1>

      <div className="grid grid-cols-3 gap-2 px-4 mt-4">
        {productData.map((el) => (
          <div
            key={el.id}
            className="flex justify-between items-center p-4 rounded-md border bg-white shadow-md "
          >
            <div className="">
              <h2 className="">Name: {el.name}</h2>
              <p className="">Price: ${el.price}</p>
            </div>

            <button
              onClick={() => addTocart(el)}
              className="bg-orange-500 rounded-md text-white py-2 px-4 "
            >
                    Add to Cart 
            </button>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-semibold text-center mt-6">Cart <span className="w-4 h-4 p-4 text-[12px] text-red-500 bg-gray-300 rounded-full ">{cart.length}</span></h1>

      <div className="flex gap-4 items-center">
        {cart.length > 0 ? (
          cart.map((el) => (
            <div
              key={el.id}
              className="p-4 rounded-md border bg-white shadow-md "
            >
              <h2 className="">Name: {el.name}</h2>
              <p className="">Price: ${el.price.toLocaleString()}</p>
              <p className="">Quantity: {el.quantity}</p>
            </div>
          ))
        ) : (
          <div className="">
            <h4 className="text-center">Your cart is Empty</h4>
            <p className="mt-2">Please add products to the cart</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
