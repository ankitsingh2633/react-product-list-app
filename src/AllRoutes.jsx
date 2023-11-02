import React from 'react'
import ProductList from './ProductList';
import { Route ,Routes} from 'react-router-dom';
import ProductInfo from './ProductInfo';
const AllRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<ProductList />}></Route>
      <Route path="/:id" element={<ProductInfo/>}></Route>
          
    </Routes>
  )
}

export default AllRoutes
