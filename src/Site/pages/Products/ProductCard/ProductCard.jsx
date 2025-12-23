import { Link } from 'react-router-dom'
import css from './ProductCard.module.css'

const ProductCard = ({img,alt,name,price,id}) => {

    return (
        <Link to={`/produits/${id}`}>
            <div className={css.productCard}>
                <div className={css.productThumbnail}>
                    <img src={img} alt={alt} className={css.productImage} />
                </div>
                <div className={css.productInfos}>
                    <span className={css.productName}>{name}</span>
                    <span className={css.productPrice}>{price}</span>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard