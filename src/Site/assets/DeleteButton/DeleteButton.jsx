import React from "react"
import apiRoute from "../../../apiRoute/apiRoute"

const DeleteButton = ({table,id}) => {

  const sendRequest = () => {
    const route = '/'+table+'/'+id
    // console.log('route : ',route)
    fetch(apiRoute(route), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response=>response.json())
    .then(data=>{
      if(data.error){
        console.log(data.error.code)
        /**
         * 
         * 
         * 
         * TO FINISH
         * 
         * 
         * 
         * 
         */
      }else{
      }

    })
    .catch(error=>{
      console.error(error)
    })
    window.location.reload()
  }

  return (
    <svg onClick={sendRequest} viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
    </svg>
  )
}
export default DeleteButton