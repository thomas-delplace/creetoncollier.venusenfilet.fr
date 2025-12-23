import { useState, useEffect } from 'react'
import AdminInterface from '../AdminInterface'
import MainPanelHeader from '../MainPanelHeader'
import apiRoute from '../../../../apiRoute/apiRoute'
import CatCoList from '../../../assets/CatCoList/CatCoList'
import NewButton from '../../../assets/NewButton/NewButton'

const CategoriesPanel = () => {

  const [categories, setCategories] = useState()

  useEffect(() => {
    fetch(apiRoute("/categories"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.length > 0) {
          setCategories(data)
        } else {
          setCategories(false)
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <AdminInterface>
        <MainPanelHeader title="Catégories"><NewButton link="/dashboard/nouvelle-categorie"/></MainPanelHeader>
        {categories ? <CatCoList items={categories} table="categories"/> : <div></div>}
    </AdminInterface>
  )
}
export default CategoriesPanel