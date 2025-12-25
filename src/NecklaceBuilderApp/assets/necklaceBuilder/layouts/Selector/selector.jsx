import css from './selector.module.css'
import './selector.css'

const Selector = ({items, onClick, className, innerRef}) => {

    return (

            <div ref={innerRef} className={css.selector}>
                {
                    items.map((item,index) => (
                        item.active && (
                            <div key={index} id={item.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => {onClick(item)}}
                            className={`${css.item} ${className(item)}`}>
                                <img src={item.img} className={css.thumbnail}/>                 
                                <div className={css.labelContainer}>
                                    <p className={css.label}>{item.label}</p>
                                </div>
                                { item.infos && item.infos.new == true ? (<div className={css.infobubble}>new</div>) : (<></>)}
                            </div>
                        )
                    ))
                }
            </div>
        

        // <ul className={css.selector}>
        //     {
        //         items.map(item => (
        //             item.active && (
        //                 <li key={item.id}
        //                 role="button"
        //                 tabIndex="0"
        //                 onClick={() => { onClick(item) }}
        //                 className={`${css.item} ${className(item)}`}>
        //                     <img src={item.img} className={css.thumbnail}/>                 
        //                     <div className={css.labelContainer}>
        //                         <p className={css.label}>{item.label}</p>
        //                     </div>
        //                 </li>
        //             )
        //         ))
        //     }
        // </ul>
    )
}
export default Selector