import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './layouts/Main'
import Header from './layouts/Header'
import ProductList from './products/ProductList'
import ProductInfo from './products/ProductInfo'
import AddProduct from './products/AddProduct'
import Signin from './users/SiginIn'

function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setisLoggedIn] = useState(false);

  // 로그인한 사용자 ID 관리
  const [userName, setUserName] = useState("");

  // 로그인 함수
  const handleLogin = (userName) => {
    setisLoggedIn(true);
    setUserName(userName);
  };

  // 로그아웃 함수
  const handleLogout = () => {
    setisLoggedIn(false);
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} username={userName} />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/products/:id' element={<ProductInfo />} />
              <Route path='/add-product' element={<AddProduct />} />
              <Route path='/signin' element={<Signin onLogin={handleLogin}/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
