import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=> {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // this is like if props.alert is false(null) then dont run anything but if props.alert is not null means true then this execute 
    <div style={{height:"20px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        {/* we don't want to give button for user */}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}  
        </div>
        }
    </div>
  )
}
