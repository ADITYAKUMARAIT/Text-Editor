import React from 'react'

export default function Alert(props) {
    const capatalize=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);

    }
  return (
        props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatalize(props.alert.type)}</strong>: {props.alert.message}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      
  )
}
