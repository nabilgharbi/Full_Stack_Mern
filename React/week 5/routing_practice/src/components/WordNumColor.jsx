import React from 'react'
import {useParams} from 'react-router-dom';

const WordNumColor = (props) => {
    
    const {word, colorOne, colorTwo} = useParams();

    return (
    <div>
        {
            isNaN(word)?
            <h2 style={colorOne?
                {color: colorOne, backgroundColor: colorTwo}:null
            }>The word is: {word} </h2>
            :
            <h2>The number is {word}</h2>
        }
    </div>
    )
}

export default WordNumColor