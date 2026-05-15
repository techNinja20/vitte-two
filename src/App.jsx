import { BrowserRouter, Routes } from "react-router"
import Cart from "./pages/Cart"
import { Route } from "react-router"
import CartPage from "./components/CartPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Cart />} />
        <Route path="/checkout" element={ <CartPage />} />
     </Routes>
    </BrowserRouter>
  )
}
