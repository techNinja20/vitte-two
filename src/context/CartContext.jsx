import { createContext, useContext, useState } from "react"

const CartContextProvider = createContext()

export function useCartContext() {
  return useContext(CartContextProvider)
}

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    const exists = cart.find((el) => el.id === product.id)

    if (exists) return

    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ])
  }

  return (
    <CartContextProvider.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContextProvider.Provider>
  )
}

export default CartContext
