import logo from "./logo.svg"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Product from "./app/component/Product"
import Dasbroad from "./app/component/Dasbroad"
import AddProduct from "./app/component/AddProduct"
import EditProduct from "./app/component/EditProduct"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/"  element={<Dasbroad />}/>
            <Route  path="product" element={<Product />}/>
            <Route  path="product/add" element={<AddProduct />}/>
            <Route  path="product/edit/:id" element={<EditProduct />}/>

        </Routes>
    </div>
  )
}

export default App
