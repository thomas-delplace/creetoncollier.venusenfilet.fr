import React, { useEffect, useRef, useState } from 'react'
import apiRoute from "../../../../apiRoute/apiRoute"
import ProductList from './ProductList'
import MainPanelHeader from '../MainPanelHeader'
import AdminInterface from '../AdminInterface'
import NewButton from '../../../assets/NewButton/NewButton'

const ProductsPanel = () => {

  let [products, setProducts] = useState(null)

  useEffect(() => {
    fetch(apiRoute("/products"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        if (data.length > 0) {
          setProducts(data)
        } else {
          setProducts(false)
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <AdminInterface>
        <MainPanelHeader title="produits">
          <NewButton link="/dashboard/nouveau-produit"/>
          </MainPanelHeader>
        {products ? <ProductList products={products} /> : <div></div>}
    </AdminInterface>

  )
}
export default ProductsPanel