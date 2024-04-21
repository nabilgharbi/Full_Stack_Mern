import React, { useState, useEffect } from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Edit = props => {

    const { id } = useParams()
    const nav = useNavigate()

    const [ authorForm, setAuthorForm ] = useState({
        name:""
    })


    const [ errors, setErrors ] = useState({
        name:""
    })

    useEffect(() => {
        axios.get(`http://localhost:5000/api/authors/show/${ id}`)
            .then(res => setAuthorForm(res.data.results))
            .catch(err => console.log(err))
    }, [id])

    const handleInputChange = e => {
        setAuthorForm({
            ...authorForm,
            [e.target.name]:e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        axios.patch(`http://localhost:5000/api/authors/update/${ id}`, authorForm)
            .then(res => {
                if(res.data.results) {
                    console.log("✅✅✅✅", res.data.results)
                    nav ("/")
                } else {
                    setErrors(res.data)
                }
            })
            .catch(err => {
            console.log("❌❌❌", err)})

    }

    return (
        <div>
            <h2 className="text-center">Edit Author:</h2>
            <Link to="/" >Home</Link> 
            <AuthorForm
                form={ authorForm }
                errors={ errors }
                value={ props.name }
                handleInputChange={ handleInputChange }
                submitValue="Update"
                handleSubmit={ handleUpdate }
            />
        </div>
    )
}

export default Edit;