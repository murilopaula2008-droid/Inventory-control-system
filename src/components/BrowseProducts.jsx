import React from 'react'

const BrowseProducts = ({id ,name, price, quantity, products, setproducts}) => {
  const deleteProductList = () => {
    const newlist = [...products]
    const newlistfilter = newlist.filter((currentProducts) => {return currentProducts.id !== id })
    setproducts(newlistfilter);
  }

  return (
    <div className='product-card all_productInfor flex gap-3'>
        <div className='product_infor flex flex-col'>
                <h2>Product name: {name}</h2>
                <h2>Price: {price}</h2>
                <h2>Quantity: {quantity}</h2>
          </div>

          <button onClick={() => deleteProductList()}>delete</button>
    </div>

  )
}

export default BrowseProducts