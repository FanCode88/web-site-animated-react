// Demo.jsx
import React, { useState } from 'react';
import './demo.scss';
import Product from '../product/Product';

const initialProducts = [
  { id: 1, name: 'Produs 1', price: 100, category: 'Electronics' },
  { id: 2, name: 'Produs 2', price: 200, category: 'Books' },
  { id: 3, name: 'Produs 3', price: 300, category: 'Clothing' },
  { id: 4, name: 'Produs 4', price: 150, category: 'Electronics' },
];

const Demo = () => {
  const [filter, setFilter] = useState('');

  return (
    <div className='demo'>
      <h1>Wellcome to Demo!</h1>
      <p>This is a exemple.</p>

      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setFilter(e.target.value)}
      />
      <Product className="product"
        products={initialProducts.filter((product) =>
          product.name.toLowerCase().includes(filter.toLowerCase())
        )}
      />
      <button className='demo-button'>Learn More!</button>
    </div>
  );
};

export default Demo;
