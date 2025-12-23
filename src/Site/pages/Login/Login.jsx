import React from 'react'
import css from './Login.module.css'
import Page from "../../assets/page/Page"
import Venus from "../../assets/venus/Venus"
import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <Page>
            <div className={css.wrapper}>
                <div className={css.background_venus}>
                    <Venus />
                </div>
                <div className={css.background_pattern}>
                    <svg alt="Venus en filet" width="162.5764mm" height="93.199783mm" viewBox="0 0 162.5764 93.199778" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                        <g id="layer1" transform="translate(-776.38055,-119.09982)">
                            <g id="pattern_group" fill="#f5f5f5" transform="matrix(2.3142005,0,0,2.3142005,493.12745,-242.73367)">
                                <path id="path32463" d="M 136.77542,163.18 A 22.814142,22.814142 0 0 0 159.58953,185.99411 22.814142,22.814142 0 0 0 136.77542,163.18 Z m 22.81411,22.81411 a 22.814142,22.814142 0 0 0 -22.81411,22.81411 22.814142,22.814142 0 0 0 22.81411,-22.81411 z" />
                                <path id="path32465" d="m 136.77939,163.17113 a 22.814142,22.814142 0 0 0 -22.81411,-22.81411 22.814142,22.814142 0 0 0 22.81411,22.81411 z m -22.81411,-22.81411 a 22.814142,22.814142 0 0 0 22.81411,-22.81412 22.814142,22.814142 0 0 0 -22.81411,22.81412 z" />
                                <path id="path32467" d="M 136.7754,163.18 A 22.814142,22.814142 0 0 0 113.96129,185.99411 22.814142,22.814142 0 0 0 136.7754,163.18 Z m -22.81411,22.81411 A 22.814142,22.814142 0 0 0 91.147185,163.18 22.814142,22.814142 0 0 0 113.96129,185.99411 Z" />
                                <path id="path32469" d="m 182.40363,208.81722 a 22.814142,22.814142 0 0 0 -22.81411,22.81411 22.814142,22.814142 0 0 0 22.81411,-22.81411 z m -22.81411,22.81411 a 22.814142,22.814142 0 0 0 -22.81411,-22.81411 22.814142,22.814142 0 0 0 22.81411,22.81411 z" />
                                <path id="path32471" d="m 136.77525,208.81752 a 22.814142,22.814142 0 0 1 -22.81411,-22.81411 22.814142,22.814142 0 0 1 22.81411,22.81411 z m -22.81411,-22.81411 a 22.814142,22.814142 0 0 1 -22.814105,22.81411 22.814142,22.814142 0 0 1 22.814105,-22.81411 z" />
                                <path id="path32473" d="m 91.147035,254.44573 a 22.814142,22.814142 0 0 1 22.814105,-22.8141 22.814142,22.814142 0 0 1 -22.814105,22.8141 z m 22.814105,-22.8141 a 22.814142,22.814142 0 0 1 -22.814105,-22.81411 22.814142,22.814142 0 0 1 22.814105,22.81411 z" />
                                <path id="path32475" d="m 45.518825,208.81751 a 22.814142,22.814142 0 0 1 22.8141,22.81411 22.814142,22.814142 0 0 1 -22.8141,-22.81411 z m 22.8141,22.81411 a 22.814142,22.814142 0 0 1 22.81411,-22.81411 22.814142,22.814142 0 0 1 -22.81411,22.81411 z" />
                                <path id="path32477" d="m 91.147045,163.1893 a 22.814142,22.814142 0 0 1 -22.81411,22.8141 22.814142,22.814142 0 0 1 22.81411,-22.8141 z m -22.81411,22.8141 a 22.814142,22.814142 0 0 1 22.81411,22.81411 22.814142,22.814142 0 0 1 -22.81411,-22.81411 z" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={css.foreground}>
                    <div className={css.loginBox}>
                        <h1>CONNEXION</h1>
                        <form action="" method="get">
                            <div>
                                <label className={css.inputLabel} htmlFor="email_input">Adresse email</label>
                                <input className={css.textInput} type="email" name="email_input" id="email_input" />
                            </div>
                            <div>
                                <label className={css.inputLabel} htmlFor="password_input">Mot de passe</label>
                                <input className={css.textInput} type="password" name="password" id="password_input" />
                            </div>
                            <div>
                                <Link to="">Créer un compte</Link>
                                <input className={css.loginButton} type="submit" value="CONNEXION" />
                            </div>
                            
                        </form>
                    </div>

                </div>
            </div>
        </Page>
    )
}
export default Login