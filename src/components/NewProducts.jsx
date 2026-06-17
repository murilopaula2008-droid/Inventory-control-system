import React, { useState } from 'react'

const NewProducts = ({addProduct}) => {

    const [nameProduct, setNameProduct] = useState();
    const [priceProduct, setPriceProduct] = useState();
    const [quantityProduct, setQuantityProduct] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nameProduct || !priceProduct || !quantityProduct) return;

        addProduct(nameProduct, priceProduct, quantityProduct);

        setNameProduct('');
        setPriceProduct('');
        setQuantityProduct('');
        

    };
  return (
      <div className='sidebar'>
        <form onSubmit={handleSubmit}>
            <h1>Control inventory Product</h1>
            <p>Add Product</p>
            <input type="text" placeholder='Add your products here' value={nameProduct} onChange={(newChange) => setNameProduct(newChange.target.value)} />
            <p>Price of product</p>
            <input type="number" name="" id="" placeholder='Enter the price of your product' value={priceProduct} onChange={(newChange) => setPriceProduct(newChange.target.value)}/>
            <p>Number of products</p>
            <input type="number" name="" id="" placeholder='Add products quantity'value={quantityProduct} onChange={(newChange) => setQuantityProduct(newChange.target.value) } />
            <button type='submit'>register product</button>
        </form>
      </div>
  )
}

export default NewProducts