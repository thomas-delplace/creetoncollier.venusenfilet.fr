import React, { useEffect, useRef, useState } from 'react'
import css from './Products.module.css'
import AdminInterface from '../AdminInterface'
import MainPanelHeader from '../MainPanelHeader'
import apiRoute from '../../../../apiRoute/apiRoute'
import addPicture from './add_picture.svg'
import { Form, Link } from 'react-router-dom'
import FormField, {FormSubmit, NameField, PictureUploader, PriceField, VariantField} from '../../../assets/FormField/FormField'






const NewProduct = () => {


  const [categories, setCategories] = useState()
  useEffect(() => {
    /**
   * DATA NEEDED : categories names & id
   */
    fetch(apiRoute('/categories'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.length !== 0) {
          setCategories(data)
        } else {
          setCategories(false)
        }
      })
      .catch(error => {
        console.error(error)
      })

  }, [])

  const [collections, setCollections] = useState()
  useEffect(()=>{
    fetch(apiRoute('/collections'),{method:"GET", headers :{'content-type':'application/json'}})
    .then(response=>response.json())
    .then(data=>{
      if(data.length !== 0){
        setCollections(data)
        console.log(data)
      }else{
        setCollections(false)
      }
    })
    .catch(err=>{
      console.error(err)
    })
  },[])
  
  const isFormOk = () => {
    if( !form.name || !form.category || !form.description || !form.tags || !form.pictures.length){ return false }
    return true
  }

  const [form, setForm] = useState({
    name:'',
    variant:'',
    category:null,
    collection:false,
    price:'',
    description:'',
    tags:'',
    pictures:[]
  })
  /**
   * control state changes ;)
   */
  useEffect(()=>{
    console.table(form)
    console.log(isFormOk())
  },[form])
  

  const updateName = (event) => {
    const value = event.target.value
    if(value.length <= 50){
      setForm(current=>({...current,name:event.target.value}))
    }
    
  }
  const updateVariant = (event) => {
    setForm(current=>({...current,variant:event.target.value}))
  }
  const updateCategory = (event) => {
    setForm(current=>({...current,category:event.target.value}))
  }
  const updateCollection = (event) => {
    setForm(current=>({...current,collection:event.target.value}))
  }
  const updatePrice = (event) => {
    const newValue = event.target.value
    const regEx = new RegExp("^(([0-9]{0,5})|([0-9]{0,5})([\\.,])|([0-9]{0,5})([\\.,])([0-9]{1,2}))$",'gi')
    if(regEx.test(newValue)){
      setForm(current=>({...current,price:newValue}))
    }
  }
  const updateDescription = (event) => {
    setForm(current=>({...current,description:event.target.value}))
  }
  const updateTags = (event) => {
    setForm(current=>({...current,tags:event.target.value}))
  }
  const updatePictures = (event) => {
    const files = event.target.files
    const numberOfFiles = files.length
    let imgData = new FormData()
    for(let i = 0; i < numberOfFiles; i++){
      const file = files[i]
      if(file.size <= 1000000 && file.type.substring(0,5) === "image"){
        imgData.append('photo', file, file.name)
      }
    }
    fetch(apiRoute("/upload-product-image"),{method: 'POST', body:imgData})
    .then(response=>response.json())
    .then(data=>{
      setForm(current=>({...current,pictures:data.map(picture=>(picture))}))
    })
    .catch(err=>{ console.error(err.message) })
  }
  const deletePicture = (picture) => {
      const pictureIndex = form.pictures.indexOf(picture)
      let newPictureList = [...form.pictures]
      newPictureList.splice(pictureIndex,1)
      setForm(current=>({...current, pictures:newPictureList}))
  }
  const createProduct = () => {
    fetch(apiRoute('/create-product'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body:JSON.stringify(form)})
    .then(response=>response.json())
    .then(data=>{console.log(data)})
    .catch(err=>{console.error(err)})
  }

  return (
    <AdminInterface>
      <MainPanelHeader title="Nouveau Produit"></MainPanelHeader>
      <div className={css.wrapper}>

        <NameField value={form.name} onChange={updateName}/>
        <VariantField value={form.variant} onChange={updateVariant}/>

        {categories ? <FormField
                          type="selector"
                          options={categories}
                          name="Categorie"
                          value={form.category}
                          onChange={updateCategory}
                          placeholder="ex : Boucles d'oreilles"
                          mandatory
                          noDefault/>
                    : <FormField
                          type="emptySelector"
                          name="Categorie"
                          placeholder="ex : Boucles d'oreilles"
                          mandatory/>}

        {collections? <FormField
                          type="selector"
                          options={collections}
                          name="Collection"
                          value={form.collection}
                          onChange={updateCollection}
                          placeholder="Hors Collection"/>
                    : <FormField
                          type="emptySelector"
                          name="Collection"
                          placeholder="Hors Collection"/>}


        <PriceField value={form.price} onChange={updatePrice}/>
        <FormField type="textarea" name="Description" value={form.description} onChange={updateDescription} mandatory/>
        <FormField type="textarea" name="Tags" value={form.tags} onChange={updateTags} mandatory/>
        <PictureUploader onChange={updatePictures} value={form.pictures} onDelete={deletePicture}/>
        <FormSubmit label="CREER PRODUIT" condition={isFormOk} onClick={createProduct}/>
      </div>


    </AdminInterface>
  )
}
export default NewProduct