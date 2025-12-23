import React from "react"
import css from './ItemLabel.module.css'

const ItemLabel = ({label}) => {

  return (
    <React.Fragment>
      {label === "public" && <div className={`${css.label} ${css.public}`}>PUBLIC</div>}
      {label === "private" && <div className={`${css.label} ${css.private}`}>PRIVÉ</div>}
    </React.Fragment>
  )
}
export default ItemLabel