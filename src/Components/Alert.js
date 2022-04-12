import React from 'react';

export default function Alert(props) {
    //to capitalize 1st character of 'success'
    const capitalize=(word)=>{
       const lower=word.toLowerCase();
       return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
// when the value of prop is null initially, then we can use this syntax which means that if props is null dont run this further code
    <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
    </div>
    )
}
