import css from './Products.module.css'
import EditButton from '../../../assets/EditButton/EditButton'
import DeleteButton from '../../../assets/DeleteButton/DeleteButton'
import ViewButton from '../../../assets/ViewButton/ViewButton'
import SortButton from '../../../assets/SortButton/SortButton'
import FilterButton from '../../../assets/FilterButton/FilterButton'
import ItemLabel from '../../../assets/ItemLabel/ItemLabel'
import { useEffect } from 'react'

const ProductList = ({ products }) => {

    useEffect(() => {
        console.log(products)
    }, [])

    return (
        <div className={css.wrapper}>
            {products.map(product => (
                // console.log('ProductList component : ',product)


                <div className={css.productGroup}>
                    <div className={css.productGroupHeader}>
                        {product.group.is_online ? <ItemLabel label="public"/> :  <ItemLabel label="private"/>}
                        <h3>{product.group.name}</h3>
                        <div className={css.viewButton}><ViewButton /></div>
                        <div className={css.editButton}><EditButton url={"/dashboard/produits/edition?id="+product.group.id} /></div>
                        <div className={css.deleteButton}><DeleteButton table="products" id={product.group.id} /></div>
                    </div>
                    <div className={css.descriptionZone}>{product.group.description}</div>
                    <div className={css.productGroupBody}>
                                    <h4>Variantes</h4>
                                    <div className={css.variantHeaderRow}>
                                        <div className={css.variantId}>ID</div>
                                        <div className={css.variantName}>NOM</div>
                                        <div className={css.variantPrice}>PRIX</div>
                                        <div className={css.variantStock}>STOCK</div>
                                        <div className={css.editButton}></div>
                                        <div className={css.deleteButton}></div>
                                    </div>
                                {product.variants.map(variant => (
                                    <div className={css.variantRow}>
                                        <div className={css.variantId}>{variant.id}</div>
                                        <div className={css.variantName}>{variant.name}</div>
                                        <div className={css.variantPrice}>{variant.price}</div>
                                        <div className={css.variantStock}>{variant.stock}</div>
                                        <div className={css.editButton}><EditButton /></div>
                                        <div className={css.deleteButton}><DeleteButton table="variants" id={variant.id} /></div>
                                    </div>

                                ))}

                    </div>
                </div>



                // <tr key={product.id}>
                //     <td className={css.cell_productId}>{product.group.id}</td>
                //     <td className={css.cell_productName}>{product.group.name}</td>
                //     <td>{product.is_online ? <ItemLabel label="public"/> :  <ItemLabel label="private"/>}</td>
                //     <td className={css.editButton}><ViewButton /></td>
                //     <td className={css.editButton}><EditButton/></td>
                //     <td className={css.deleteButton}><DeleteButton table="products" id={product.id}/></td>
                // </tr>
            ))}

        </div>
    )
}
export default ProductList