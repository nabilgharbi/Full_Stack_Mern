import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Form = () => {

    const [heroNumber,setHeroNumber] = useState(1)

    const nav = useNavigate()

    const SubmitHandler= (e) =>{
        e.preventDefault();
        console.log("submit", heroNumber)
        nav("/hero/" + heroNumber)
    }
    return (
    <fieldset>
        <legend>Form</legend>
        <form onSubmit={SubmitHandler}>
            <input type="number" value ={heroNumber} onChange={e =>
                setHeroNumber(e.target.value)}/>
                <button>submit</button>
        </form>
    </fieldset>
    )
}

export default Form