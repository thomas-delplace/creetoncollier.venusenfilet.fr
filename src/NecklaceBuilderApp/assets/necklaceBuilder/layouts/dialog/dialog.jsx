import css from './dialog.module.css'

const Dialog = ({ children }) => {

    return (
        <div className={css.dialogWrapper}>
            <div className={css.dialog}>
                {children}
            </div>
        </div>
    )
}

const DialogHeader = ({ children }) => {
    return (
        <div className={css.dialogHeader}>
            {children}
        </div>
    )
}
const DialogBody = ({ children }) => {
    return (
        <div className={css.dialogBody}>
            {children}
        </div>
    )
}
const DialogFooter = ({ children }) => {
    return (
        <div className={css.dialogFooter}>
            {children}
        </div>
    )
}

export {Dialog, DialogHeader, DialogBody, DialogFooter}