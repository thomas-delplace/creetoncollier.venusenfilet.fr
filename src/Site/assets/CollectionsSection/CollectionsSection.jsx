import React from 'react'
import css from './CollectionsSection.module.css'
import { Link } from 'react-router-dom'

const CollectionsSection = () => {

    return (
        <React.Fragment>

            <h2 className={css.title}>Collections</h2>
            <div className={css.outerWrapper}>
                <img className={css.topSeparator} src="collections-section-top-separator.webp" alt="" srcSet="" />
                <div className={css.innerWrapper}>
                    <ul className={css.collections}>
                        <Link>
                            <li className={css.collection}>
                                <img src="venus.webp" alt="" />
                                <span>KINKY</span>
                            </li>
                        </Link>

                        <Link>
                            <li className={css.collection}>
                                <img src="photo.jpg" alt="" />
                                <span>QUEER</span>
                            </li>
                        </Link>

                        <Link>
                            <li className={css.collection}>
                                <img src="brown-vintage-pattern-old-wall-rich-vintage-retro-pattern-interior.jpg" alt="" />
                                <span>FÉMINISTE</span>
                            </li>
                        </Link>

                        <Link>
                            <li className={css.collection}>
                                <img src="rainbow-bg-dim.png" alt="" />
                                <span>BREIZH</span>
                            </li>
                        </Link>

                        <Link>
                            <li className={css.collection}>
                                <img src="brown-vintage-pattern-old-wall-rich-vintage-retro-pattern-interior.jpg" alt="" />
                                <span>FÉMINISTE</span>
                            </li>
                        </Link>
                        <Link>
                            <li className={css.voirtout}>VOIR TOUT</li>
                        </Link>
                    </ul>
                </div>
                <img className={css.bottomSeparator} src="collections-section-bottom-separator.webp" alt="" srcSet="" />
            </div>
        </React.Fragment>

    )
}
export default CollectionsSection