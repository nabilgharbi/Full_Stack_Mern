import React, { useState } from 'react';


const BoxForm = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color);
        setColor("");
    }

    return (
        <div>
            <form onSubmit = { handleSubmit }>
                <div className = "row p-3 text-center" >
                    <div className = "col" >
                        <label htmlFor = "color" > Color: </label> 
                    </div> 
                    <div className = "col" >
                        <input onChange = {(e) => setColor(e.target.value) } type = "text" value = { color } className = "form-control" />
                    </div> 
                    <div className = "col" >
                        <input type = "submit" value = "Add" className = "btn btn-outline-info" />
                    </div> 
                </div> 
            </form> 
        </div>
    )
}

export default BoxForm;