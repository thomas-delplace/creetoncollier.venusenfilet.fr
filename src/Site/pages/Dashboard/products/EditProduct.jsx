import { useEffect, useState } from 'react'
import css from './Products.module.css'
import AdminInterface from '../AdminInterface'
import MainPanelHeader from '../MainPanelHeader'
import apiRoute from '../../../../apiRoute/apiRoute'
import FormField, { FormSubmit, NameField } from '../../../assets/FormField/FormField'

const EditProduct = () => {

    /**
     * 
     * RETRIEVING DATA
     * 
     */

    const queryParameters = new URLSearchParams(window.location.search)
    const queryId = queryParameters.get('id')

    const [categories, setCategories] = useState()
    useEffect(() => { console.table(categories) }, [categories])
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
    useEffect(() => { console.table(collections) }, [collections])
    useEffect(() => {
        fetch(apiRoute('/collections'), { method: 'GET', headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(data => {
                if (data.length !== 0) { setCollections(data) }
                else { setCollections(false) }
            })
            .catch(error => { console.error(error) })
    }, [])

    const [product, setProduct] = useState()
    const [activeCollection, setActiveCollection] = useState()
    useEffect(() => { console.table(product) }, [product])
    useEffect(() => { console.log('activeCollection : ' + activeCollection) }, [activeCollection])
    useEffect(() => {
        fetch(apiRoute("/product/" + queryId), { method: 'GET', headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(data => {
                setProduct(data)
                fetch(apiRoute('/collections-for-product/' + data.id), { method: 'GET', headers: { 'Content-Type': 'application/json' } })
                    .then(response => response.json())
                    .then(data => {
                        setActiveCollection(data[0])
                        if (!data[0]) {
                            setActiveCollection(false)
                        }
                    })
                    .catch(err => { console.error(err) })
            })
            .catch(error => { console.error(error) })
    }, [])

    const dataIsReady = () => {
        if (!product || !categories || !collections) { return false }
        return true
    }


    /**
     * 
     * STATES CHANGE : FORM ACTIONS
     * 
     */

    const updateName = (event) => {
        const value = event.target.value
        if (value.length < 50) {
            setProduct(current => ({ ...current, name: event.target.value }))
        }
    }
    const updateCategory = (event) => {
        setProduct(current => ({ ...current, category: event.target.value }))
    }
    const updateCollection = (event) => {
        setActiveCollection(parseInt(event.target.value))
    }
    const updateTags = (event) => {
        const value = event.target.value
        if (value.length < 1000) {
            setProduct(current => ({ ...current, tags: value }))
        }
    }
    const updateDescription = (event) => {
        const value = event.target.value
        if (value.length < 1000) {
            setProduct(current => ({ ...current, description: value }))
        }
    }

    /**
     * 
     * SAVING CHANGES
     * 
     */

    const isProductOk = () => {
        if (!product.name || !product.description || !product.tags || !product.category) { return false }
        return true
    }
    const saveChanges = () => {
        const queryBody = JSON.stringify({product,collection:activeCollection})
        fetch(apiRoute('/update-product/'+product.id), {method:'PUT', headers:{'Content-Type':'application/json'}, body:queryBody})
        .then(response=>response.json())
        .then(data=>{console.log(data.message)})
        .catch(err=>{console.error(err)})
    }

    return (
        <AdminInterface>
            <MainPanelHeader title="Editer produit" />
            <div className={css.wrapper}>
                {dataIsReady() && <>
                    <NameField onChange={updateName} value={product.name} />
                    <FormField type="selector" name="Catégorie" onChange={updateCategory} options={categories} defaultValue={product.category} noDefault noPlaceholder />
                    <FormField type="selector" name="Collection" onChange={updateCollection} options={collections} defaultValue={activeCollection ? activeCollection[0] : "false"} placeholder="Hors Collection" />
                    <FormField type="textarea" name="Description" onChange={updateDescription} value={product.description} />
                    <FormField type="textarea" name="Tags" onChange={updateTags} value={product.tags} />
                    <FormSubmit label="SAUVEGARDER" condition={isProductOk} onClick={saveChanges}/>
                </>}
            </div>
            
        </AdminInterface>
    )
}
export default EditProduct