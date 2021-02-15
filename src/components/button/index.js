import React from 'react';

export default function Button(props){
    const { label,type,onChange,value } = props;
    return(
        <div>
            <button
                onChange={e => onChange(e.target.value)}
                type={type}
                value={value}
            >
            {label}
            </button>
        </div>
    )
}