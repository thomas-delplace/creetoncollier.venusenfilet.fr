import React, { useRef, useState } from 'react'
import AdminInterface from '../AdminInterface'
import MainPanelHeader from '../MainPanelHeader'
import NCForm from '../../../assets/NCForm/NCForm'

const NewCategory = () => {

  return (
    <AdminInterface>
      <MainPanelHeader title="Nouvelle categorie"></MainPanelHeader>
      <NCForm type="categories"/>
    </AdminInterface>
  )
}
export default NewCategory