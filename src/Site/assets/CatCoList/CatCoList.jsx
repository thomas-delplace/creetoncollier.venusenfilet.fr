import css from './CatCoList.module.css'
import EditButton from '../EditButton/EditButton'
import DeleteButton from '../DeleteButton/DeleteButton'
import SortButton from '../SortButton/SortButton'
import FilterButton from '../FilterButton/FilterButton'
import ItemLabel from '../ItemLabel/ItemLabel'

const CatCoList = ({table,items}) => {

    return (
        <div className={css.wrapper}>
            <table className={css.table}>
                <thead>
                    <tr>
                        <th className={css.column_id}>ID</th>
                        <th className={css.column_name}>Libellé</th>
                        <th className={css.column_tags}>Tags</th>
                        <th className={css.column_button}></th>
                        <th className={css.column_button}></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        // console.log('CategoryList component : ',category)
                        <tr key={item.id}>
                            <td className={css.cell_Id}>{item.id}</td>
                            <td className={css.cell_Name}>{item.name}</td>
                            <td className={css.cell_Tags}>{item.tags}</td>
                            <td className={css.editButton}><EditButton url={'/dashboard/'+table+'/edition?id='+item.id}/></td>
                            <td className={css.deleteButton}><DeleteButton table={table} id={item.id}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export default CatCoList