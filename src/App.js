import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import EditProduct from './components/products/productForm/EditProduct';
import NewProduct from './components/products/productForm/NewProduct';
import Layout from './components/UI/layout/Layout';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='dashboard' element={<Dashboard title='Dashboard' />} ></Route>
        <Route path='categories' element={<Categories />}></Route>
        <Route path='category/:categoryId' element={<Products />}></Route>
        <Route path='products' element={<Products />}></Route>
        <Route path='new-product' element={<NewProduct />}></Route>
        <Route path='edit-product/:id' element={<EditProduct />}></Route>
        <Route path='' element={<Navigate to='dashboard' />} ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
