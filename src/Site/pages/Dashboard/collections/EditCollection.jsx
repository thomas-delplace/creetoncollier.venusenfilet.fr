import React from "react"
import AdminInterface from "../AdminInterface"
import MainPanelHeader from "../MainPanelHeader"
import FormField, { FormSubmit } from "../../../assets/FormField/FormField"
import css from "./Collections.module.css"

const EditCollection = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const collectionId = queryParameters.get('id')

    return (
        <AdminInterface>
            <MainPanelHeader title="EDITER COLLECTION"></MainPanelHeader>
            <div className={css.wrapper}>
                <FormField
                    type="text"
                    name="Nom"
                    placeholder="taper nom ici"
                    mandatory/>
                <FormField
                    type="textarea"
                    name="Tags"
                    mandatory/>
                <FormSubmit
                    label="sauvegarder"
                    condition={()=>(true)}
                    onClick={()=>{console.log('beep boop')}}/>
            </div>
        </AdminInterface>
    )
}
export default EditCollection