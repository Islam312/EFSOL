import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EditProduct } from '../../page/editPage';
import { Irons } from '../../page/irons';
import { RefrigeratorPage } from '../../page/refrigerators';
import { TVsetPage } from '../../page/tvSet';
import { Navbar } from '../navbar/navbar';
import { ProductList } from '../product-list/product-list';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/tv-sets" element={<TVsetPage />}></Route>
          <Route path="/refrigerators" element={<RefrigeratorPage />}></Route>
          <Route path="/irons" element={<Irons />}></Route>
          <Route path="/edit" element={<EditProduct />}></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
