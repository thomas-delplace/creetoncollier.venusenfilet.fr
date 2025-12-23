import { useState, useEffect } from 'react'
import AdminInterface from '../AdminInterface'
import MainPanelHeader from '../MainPanelHeader'
import apiRoute from '../../../../apiRoute/apiRoute'
import NewButton from '../../../assets/NewButton/NewButton'
import CatCoList from '../../../assets/CatCoList/CatCoList'

const CollectionsPanel = () => {

  const [collections, setCollections] = useState()

  useEffect(()=>{
    console.log(collections)
  },[collections])

  useEffect(() => {
    fetch(apiRoute("/collections"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        if (data.length > 0) {
          setCollections(data)
        } else {
          setCollections(false)
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <AdminInterface>
        <MainPanelHeader title="Collections"><NewButton link="/dashboard/nouvelle-collection"/></MainPanelHeader>
        {collections
          ? <CatCoList items={collections} table="collections"/>
          : <div></div>}
    </AdminInterface>
  )
}
export default CollectionsPanel