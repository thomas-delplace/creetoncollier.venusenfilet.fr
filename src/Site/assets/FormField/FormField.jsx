import React from 'react'
import css from './FormField.module.css'
import addPicture from './add_picture.svg'
import apiRoute from '../../../apiRoute/apiRoute'

const FormField = ({ name, type, value, onChange, placeholder, options, mandatory, noDefault, defaultValue, noPlaceholder }) => {

    return (
        <div className={css.wrapper}>
            {mandatory ? <h3 className={css.mandatory}>{name}</h3> : <h3>{name}</h3>}

            {type === 'text' && <input autoComplete='off' className={css.input__text}
                onChange={onChange}
                value={value}
                type="text"
                name={name ? name : ""}
                id={name ? name : ""}
                placeholder={placeholder ? placeholder : ""} />}

            {type === "selector" && <select
                className={css.input__selector}
                onChange={onChange}
                name={name}
                id={name}
                defaultValue={defaultValue ? defaultValue : "false"}>
                {!noPlaceholder
                    ? noDefault
                        ? <option value="false" disabled>{placeholder ? placeholder : ""}</option>
                        : <option value="false">{placeholder ? placeholder : ""}</option>
                    : null}
                {options.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}
            </select>}

            {type === "emptySelector" && <select
                className={css.input__selector}
                defaultValue="false">
                <option value="false" disabled>{placeholder ? placeholder : ""}</option>
            </select>}

            {type === "textarea" && <textarea
                className={css.input__textarea}
                onChange={onChange}
                value={value}
                name={name ? name : ""}
                id={name ? name : ""}
                placeholder={placeholder ? placeholder : ""}>
            </textarea>}
        </div>
    )
}
const PictureUploader = ({ onChange, value, onDelete }) => {
    return (
        <div className={css.wrapper}>
            <h3 className={css.mandatory}>Photos</h3>
            <div className={css.pictureContainer}>
                <div className={css.fileInputContainer}>
                    <img className={css.fileInputImage} src={addPicture} alt="" />
                    <input onChange={onChange} className={css.fileInput} type="file" name="product_pictures" id="product_pictures" accept='image/*' max="5" multiple />
                </div>

                {value.map(picture => (
                    <div key={picture} className={css.uploadedPictureContainer}>
                        <img className={css.uploadedPicture} src={apiRoute(picture)} alt="" />
                        <button onClick={() => { onDelete(picture) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                            </svg>
                        </button>
                    </div>
                ))}

            </div>
        </div>
    )
}
const NameField = ({ value, onChange }) => {
    return <FormField type="text" name="Nom" value={value} onChange={onChange} placeholder="ex: Ailes d'ange" mandatory />
}
const VariantField = ({ value, onChange }) => {
    return <FormField type="text" name="Variante" value={value} onChange={onChange} placeholder="ex: Bronze, Inox ..." />
}
const PriceField = ({ value, onChange }) => {
    return <FormField type="text" name="Prix" value={value} onChange={onChange} placeholder="00.00" mandatory />
}
const FormSubmit = ({ condition, label, onClick }) => {
    return (
        <div className={css.wrapper}>
            <div className={css.emptySpaceLeft}></div>
            {condition()
                ? <button className={css.button__available} onClick={onClick}>{label}</button>
                : <button className={css.button__unavailable}>{label}</button>}
        </div>
    )
}

export { FormSubmit , PictureUploader, NameField, VariantField, PriceField }
export default FormField