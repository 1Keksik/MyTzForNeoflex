import './base.css'
import './reset.css'

import Cart from '../../pages/Cart';
import Home from '../../pages/Home';
import Footer from '../Footer';
import Header from '../Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // sessionStorage.clear();
    const savedtotalCount = sessionStorage.getItem('totalCount');
    if (savedtotalCount) {
      setTotalCount(JSON.parse(savedtotalCount));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header totalCount={totalCount} />
        <Routes>
          <Route path='/' element={<Home totalCount={totalCount} setTotalCount={setTotalCount} />} />
          <Route path='/cart' element={<Cart totalCount={totalCount} setTotalCount={setTotalCount} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
