import logo from './logo.svg';
import './App.css';
import Component from './components/Component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Products from './pages/product';
import Layout from './components/Layout';
import NotFound from './pages/404';
import NganhNghe from './pages/danh-muc/nganh-nghe';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path='/danh-muc'>
                <Route path='nganh-nghe' element={<NganhNghe/>}/>
            </Route>
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
