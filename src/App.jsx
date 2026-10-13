import './App.css';
import Main from "./layouts/Main";
import Headers from "./layouts/Headers";
import ProductList from '../products/ProductList';
import ProductInfo from '../products/ProductInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import AddProduct from './layouts/AddProduct';

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Headers />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/products/:id' element={<ProductInfo />} />
              <Route path='/add-product' element={<AddProduct />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App;