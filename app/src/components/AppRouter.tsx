import { Navigate, Route, Routes } from "react-router"
import { ERROR_404, HOME } from "constants/route"
import MainLayout from "layouts/MainLayout"
import Home from "pages"
import PageNotFound from "pages/error404"

function AppRouter() {
  return (
    <Routes>
      <Route path={HOME} element={<MainLayout />}>
        <Route path="*" element={<Navigate to={ERROR_404} />} />
        <Route index element={<Home />} />
        <Route path={ERROR_404} element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
