import FormField from '../FormField/FormField'
import css from './ProductForm.module.css'

const ProductForm = ({onSubmit, edit}) => {

  return (
    <div className={css.wrapper}>

        {/* PRODUCT NAME */}
        <div className={css.np_section}>
          <h3 className={css.mandatory}>Nom</h3>
          <input
            className={css.productName}
            onChange={updateName}
            type="text"
            name="product_name"
            id="product_name"
            placeholder="ex : Ailes d'ange" />
        </div>
        <FormField name="nom" type="text" placeholder="ailes d'ange"/>

        {/* PRODUCT VARIANT */}
        <div className={css.np_section}>
          <h3>Variante</h3>
          <input
            className={css.productVariant}
            onChange={updateVariant}
            type="text"
            name="product_variant"
            id="product_variant"
            placeholder="ex : Bronze, Inox"/>
        </div>


        {/* PRODUCT CATEGORY */}
        <div className={css.np_section}>
          <h3 className={css.mandatory}>Catégorie</h3>
          {categories && <>
            <select
              className={css.selector}
              onChange={updateCategory}
              name="product_category"
              id="product_category"
              defaultValue="false">
              <option value="false" disabled>ex : Boucles d'oreilles</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}</select>
          </>}
        </div>


        {/* PRODUCT COLLECTION */}
        <div className={css.np_section}>
          <h3>Collection</h3>
          {collections
            ? <select
                className={css.selector}
                onChange={updateCollection}
                name="product_collection"
                id="product_collection"
                defaultValue="false">
                <option value="false">Hors collection</option>
                {collections.map(collection => (
                  <option key={collection.id} value={collection.id}>{collection.name}</option>
                ))}</select>
            : <button
                onClick={()=>{window.location.href="/dashboard/nouvelle-collection"}}
                className={css.button__available}>NOUVELLE COLLECTION</button>}
        </div>


        {/* PRODUCT PRICE */}
        <div className={css.np_section}>
          <h3 className={css.mandatory}>Prix</h3>
          <input
            className={css.productPrice}
            onChange={updatePrice}
            value={form.price}
            type="text"
            name="product_price"
            id="product_price"/>
        </div>


        {/* PRODUCT DESCRIPTION */}
        <div className={css.np_section}>
          <h3 className={css.mandatory}>Description</h3>
          <textarea
            className={css.productDescription}
            onChange={updateDescription}
            name="product_description"
            id="product_description" ></textarea>
        </div>


        {/* PRODUCT TAGS */}
        <div className={css.np_section}>
          <h3 className={css.mandatory}>Tags</h3>
          <textarea
            className={css.productTags}
            onChange={updateTags}
            name="product_tags"
            id="product_tags"></textarea>
        </div>


        {/* PRODUCT PICTURES */}
        <div className={css.np_section}>
          <h3>Photos</h3>
          <div className={css.pictureContainer}>
            <div className={css.fileInputContainer}>
              <img className={css.fileInputImage} src={addPicture} alt="" />
              <input onChange={updatePictures} className={css.fileInput} type="file" name="product_pictures" id="product_pictures" accept='image/*' max="5" multiple/>
            </div>

            {form.pictures.map(picture=>(
              <div key={picture} className={css.uploadedPictureContainer}>
                <img className={css.uploadedPicture} src={apiRoute(picture)} alt="" />
                <button onClick={()=>{deletePicture(picture)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                  </svg>
                </button>
              </div>
            ))}
            
          </div>
        </div>
        <div className={css.np_section}>
          <div className={css.emptySpaceLeft}></div>
          {isFormOk()
            ? <button className={css.button__available} onClick={createProduct}>SAUVEGARDER</button>
            : <button className={css.button__unavailable}>SAUVEGARDER</button>}
        </div>
      </div>
  )
}
export default ProductForm