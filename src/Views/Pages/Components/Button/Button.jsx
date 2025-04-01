import React from 'react'
import "./Button.css"

const Button = ({ value }) => {
    return (
        <>
            <div class="buttons">
                <button class="btn"><span></span><p data-start="good luck!" data-text="start!" data-title={value}></p></button>
            </div>
        </>
    )
}

export default Button