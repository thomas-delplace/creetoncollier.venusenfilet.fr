import React, {useEffect, useState} from 'react'
import AdminInterface from '../AdminInterface'
import MainPanelHeader from '../MainPanelHeader'
import NCForm from '../../../assets/NCForm/NCForm'

const NewCollection = () => {

  return (
    <AdminInterface>
        <MainPanelHeader title="Nouvelle collection"></MainPanelHeader>
        <NCForm type="collections"/>
    </AdminInterface>
  )
}
export default NewCollection