import { useState, useEffect } from 'react'
import AdminInterface from '../AdminInterface'
import MainPanelHeader from '../MainPanelHeader'
import apiRoute from '../../../../apiRoute/apiRoute'
import OrderList from './OrderList'
import NewButton from '../../../assets/NewButton/NewButton'

const OrdersPanel = () => {

  const [orders, setOrders] = useState()

  useEffect(() => {
    fetch(apiRoute("/orders"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        if (data.length > 0) {
          setOrders(data)
        } else {
          setOrders(false)
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <AdminInterface>
        <MainPanelHeader title="Commandes"></MainPanelHeader>
        {orders ? <OrderList/> : <div></div>}
    </AdminInterface>
  )
}
export default OrdersPanel