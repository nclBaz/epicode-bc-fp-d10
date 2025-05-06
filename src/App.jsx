import { Routes, Route } from "react-router"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import NotFound from "./pages/NotFound"
import ProductDetail from "./pages/ProductDetail"
import Layout from "./layout/Layout"
import { Provider } from "react-redux"
import store from "./redux/store"
import Cart from "./pages/Cart"

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        {/* Grazie al Nested Routing posso raggruppare quali pagine debbano condividere delle componenti UI di layout "fisse" */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  )
}

export default App
