import React from 'react'
import css from './Page.module.css'
import Nav from '../nav/Nav'
import Footer from '../Footer/Footer'

const Page = ({ children }) => {

    return (
        <React.Fragment>
            <Nav />
            <div className={css.page}>{children}</div>
            <Footer />
        </React.Fragment>

    )
}
export default Page