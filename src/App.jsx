import { Route, Routes } from "react-router"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import Page from "./pages/Page"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/page" element={<Page />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  )
}

export default App
