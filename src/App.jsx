import { BrowserRouter, Routes } from "react-router"
import Cart from "./pages/Cart"
import AddToCart from "./pages/CartCart"
import { Route } from "react-router"
import CartPage from "./components/CartPage"
import CartCart from "./pages/CartCart"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Cart />} />
        <Route path="/CartCart" element={ <CartCart />} />
        <Route path="/checkout" element={ <CartPage />} />
     </Routes>
    </BrowserRouter>
  )
}
