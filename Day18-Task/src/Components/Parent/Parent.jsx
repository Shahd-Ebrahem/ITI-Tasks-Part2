import React, { useState } from 'react'
import Child from '../Child/Child'
import { Link, Outlet } from "react-router-dom";

export default function Parent() {
  let prodArray = [
    {id: 1, pName: "Samsung", price: 5000, onSale: true, desc: "good", counter: 0, },
    {id: 2, pName: "tv", price: 7000, onSale: false, desc: "good", counter: 0, },
    {id: 3, pName: "pc", price: 1000, onSale: true, desc: "good", counter: 0, },
    {id: 4, pName: "mouse", price: 3000, onSale: false, desc: "good", counter: 0, },
    {id: 5, pName: "xiaomi", price: 9000, onSale: true, desc: "good", counter: 0, },
    {id: 6, pName: "oppo", price: 4000, onSale: false, desc: "good", counter: 0, },
  ];

  let [products, setProuducts] = useState (prodArray);

  function deleteProd (prodId) {
    let newProducts = products.filter( (product) => product.id !== prodId);
    setProuducts(newProducts);
  }

  return ( 
  <>
  <Outlet/>
      <nav>
                <ul>
                    <li>
                        <Link to={'cats'}>Cats Component Link</Link>
                    </li>
                    <li>
                        <Link to={'dogs'}>Dogs component link</Link>
                    </li>
                </ul>
            </nav>

    <div>
      <div className='container text-2xl bg-info p-4'>
        <div className='row'>
          { products.map( (product) => (<Child product={product} delProd={deleteProd}  />))}
        </div>
      </div>
    </div>
    </>
  )
}
