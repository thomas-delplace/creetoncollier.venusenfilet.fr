import css from './Orders.module.css'
import EditButton from '../../../assets/EditButton/EditButton'
import SortButton from '../../../assets/SortButton/SortButton'
import FilterButton from '../../../assets/FilterButton/FilterButton'
import ItemLabel from '../../../assets/ItemLabel/ItemLabel'

const OrderList = (orders) => {

    return (
        <div className={css.wrapper}>
            <table className={css.table}>
                <thead>
                    <tr>
                        <th className={css.column_id}>ID</th>
                        <th className={css.column_name}>Libellé</th>
                        <th className={css.column_online}></th>
                        <th className={css.column_button}><SortButton/></th>
                        <th className={css.column_button}><FilterButton/></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        // console.log('OrderList component : ',order)
                        <tr key={order.id}>
                            <td className={css.cell_orderId}>{order.id}</td>
                            <td className={css.cell_orderName}>{order.name}</td>
                            <td>{order.is_online ? <ItemLabel label="public"/> :  <ItemLabel label="private"/>}</td>
                            <td className={css.editButton}><EditButton/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export default OrderList