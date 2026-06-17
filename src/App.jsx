import { useState } from 'react'
import './App.css'
import BrowseProducts from './components/BrowseProducts'
import NewProducts from './components/NewProducts';

function App() {

const [products, Setproducts] = useState([]);

  const newListProduct = (nameProduct, priceProduct, quantityProduct) => {
    const newProduct = [...products, {
        id: Date.now(), 
        name: nameProduct, 
        price: priceProduct, 
        quantity: quantityProduct ,
    }]
    Setproducts(newProduct)
  };

  return (
    <>
    <div className='app-root'>
      <NewProducts addProduct={newListProduct}/>
      <div className='list-panel'>
    <h2>Product list</h2>
    <div className='all_list flex flex-col gap-10'>
      {products.map((currentProduct) => (
        <BrowseProducts key={currentProduct.id} id={currentProduct.id} name={currentProduct.name} quantity={currentProduct.quantity} price={currentProduct.price} products={products} setproducts={Setproducts} />
      ))}
    </div>
      </div>
    </div>
    </>
  )
}

export default App
