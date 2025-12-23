import React from "react"
import { Link } from "react-router-dom"

import css from './MainPanelHeader.module.css'

const MainPanelHeader = ({title, children}) => {

    return (
        <div className={css.mainPanelHeader}>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    )
}
export default MainPanelHeader