import React, { Component } from 'react';

const cardStyle = {
    width: '350px'
}


class PersonCard extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            age: this.props.age
        };
    }

    render() {

        let buttonClick = () => {
            console.log('button works')
            this.setState({age: this.state.age+1}) ;
        }

        let { firstName, lastName, age, hairColor } = this.props

        return (
            <div className="card" style={ cardStyle}>
                <div className = "card-body">
                    <h1 className="card-title">{lastName}, {firstName} </h1>
                    <p className="card-text">Age: {this.state.age}</p>
                    <p className="card-text">Hair Color:  {hairColor}</p>
                    <button onClick = {buttonClick}>Add a year to {firstName} {lastName}!</button>
                </div>
            </div>
        )
    }

}

export default PersonCard;