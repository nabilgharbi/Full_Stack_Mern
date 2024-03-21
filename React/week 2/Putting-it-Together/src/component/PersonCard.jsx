import React, { Component } from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>Birthday button for {props.firstName} {props.lastName} {props.count}</button>
    );
}

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <Button handleClick={this.handleClick} count={this.state.clickCount} firstName={this.props.firstName} lastName={this.props.lastName}/>
            </div>
        );
    }
}


export default PersonCard;



