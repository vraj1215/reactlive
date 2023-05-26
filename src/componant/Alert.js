import React from 'react'

function Alert(props) {
    // console.log(props.msg)
    return (
         props.msg &&  <div>
            <div className={`alert alert-${props.msg.ty} alert-dismissible fade show`} role="alert">
  <strong>{props.msg.msg}</strong> 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
        </div>
    )
}

export default Alert
