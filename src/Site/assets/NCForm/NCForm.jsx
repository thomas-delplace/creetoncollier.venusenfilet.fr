import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import apiRoute from '../../../apiRoute/apiRoute'
import css from './NCForm.module.css'

const NCForm = ({type}) => {

    const tagRef = useRef()
    const nameRef = useRef()
  
    const [requestValid, setRequestValid] = useState(false)
  
    const handleChange = () => {
      const tags = tagRef.current.value
      const name = nameRef.current.value
      if (tags.length === 0 || tags.length > 1000) {
        setRequestValid(false)
        return
      }
      if (name.length === 0 || name.length > 50) {
        setRequestValid(false)
        return
      }
      setRequestValid(true)
    }

    const sendRequest = () => {
      const tags = tagRef.current.value
      const name = nameRef.current.value
      console.log({ name,tags })
  
      fetch(apiRoute("/"+type+"/new"),{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({name,tags})
      })
      .then(response=>response.json())
      .then(()=>{
        window.location.href="/dashboard/"+type
      })
      .catch(error=>{
        console.error(error)
      })
    }
  
  return (
    <div className={css.nc_mainPanel}>
        <div className={css.nc_section}>
          <h3>Nom</h3>
          <input onChange={handleChange} ref={nameRef} className={css.input} type="text" />
        </div>
        <div className={`${css.nc_section} ${css.nc_tags}`}>
          <h3>Tags</h3>
          <textarea onChange={handleChange} ref={tagRef} className={css.input} name="category_tags" id="category_tags"></textarea>
        </div>
        <div className={`${css.nc_section} ${css.nc_buttons}`}>
          <Link to={"/dashboard/"+type} className={css.cancelButton}>Annuler</Link>
          {requestValid ? <button className={css.submitButton} onClick={sendRequest}>Valider</button>
            : <button className={css.submitButtonGrayed}>Valider</button>}


        </div>

      </div>
  )
}
export default NCForm