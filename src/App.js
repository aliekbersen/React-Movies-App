
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';




function App() {
  return (
    <BrowserRouter>
         <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/:category/search/:keyword' element={<Catalog />} />
      <Route path='/:category/:id' element={<Detail />} />
      <Route path='/:category' element={<Catalog />} />
    </Routes>
     
      <Footer />
  </BrowserRouter>
  );
}

export default App;
