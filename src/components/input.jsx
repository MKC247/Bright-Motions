import './submitdata.css';
import React from "react";

const Inpuform = React.forwardRef((props, ref) => {
    return (<div className='input'>
        <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
    </div>);
});
export default Inpuform;