import { useEffect, useState } from 'react'
import AdminInterface from './AdminInterface'
import css from './Dashboard.module.css'
import ProductsPanel from './products/ProductsPanel'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  return (
    <AdminInterface>
        <ProductsPanel/>
    </AdminInterface>
  )
}
export default Dashboard