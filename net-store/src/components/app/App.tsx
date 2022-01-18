import React, { useState } from 'react';
import { Navbar } from '../navbar/navbar';
import { ProductList } from '../product-list/product-list';

import './App.css';
import { data } from '../../data';

const App: React.FC = () => {
  const [dataState, setDataState] = useState(data);
  // const dataSortNewProduct = [data.filter(item => item.isNew)]
  // console.log('data sort', dataSortNewProduct);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ProductList productData={dataState} />
      </main>
    </>
  );
};

export default App;
