import React from 'react'
import css from './NotFound.module.css'
import Nav from '../../assets/nav/Nav'
import Page from '../../assets/page/Page'
import Logo from '../../assets/logo/Logo'

const NotFound = () => {

    return (
        <Page>
            <div className={css.wrapper}>
                <Logo/>
                <h3 className={css.h1}>404 - PATROUVÉ</h3>
                <p>Il semblerait que la page que tu cherches n'existe pas, n'existe plus ou n'a carrément jamais existé.</p>

            </div> 
        </Page>
    )
}
export default NotFound