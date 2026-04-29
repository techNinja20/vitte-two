import { BrowserRouter, Outlet, Route, Routes } from "react-router"
import Glo from "./pages/Glo"
import ZulfahExplore from "./pages/ZulfahExplore"
import Cyber from "./pages/Cyber"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Glo />} /> */}
        <Route path="/" element={<ZulfahExplore />} />

        <Route
          path="/wale"
          element={
            <div>
              <h1>Yoooooooooo</h1> <Outlet />
            </div>
          }
        >
          <Route index element={<Cyber />} />
        </Route>
        <Route path="*" element={<div>404 page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
