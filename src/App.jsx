import { BrowserRouter, Route, Routes } from "react-router"
import { allPaths } from "./routes/paths"
import { allRoutes } from "./routes/routes"
import DashboardLayout from "./layouts/DashboardLayout"




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map(({ path, Element, hasDashboardLayout }, i) => (
          <Route
            key={i}
            path={path}
            element={
              hasDashboardLayout ? (
                <DashboardLayout>
                  <Element />
                </DashboardLayout>
              ) : (
                <Element />
              )
            }
          />
        ))}
        <Route path={allPaths.four0four} element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}
