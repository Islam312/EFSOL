import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        </Routes>
      </main>
    </Router>
  );
};

export default App;
