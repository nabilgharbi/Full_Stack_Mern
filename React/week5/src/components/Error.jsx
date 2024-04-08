import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
    <fieldset>
    <h1> 404 Not Found <Link to="/SearchHero">try Again </Link></h1>
    </fieldset>
    )
}

export default Error