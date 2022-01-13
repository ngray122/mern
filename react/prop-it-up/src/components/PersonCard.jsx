import React, { Component } from 'react';

const cardStyle = {
    width: '300px'
}


class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props
        return (
            <div className="card" style={ cardStyle}>
                <div className = "card-body">
                    <h1 className="card-title">{lastName}, {firstName} </h1>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Hair Color:  {hairColor}</p>
                </div>
            </div>
        )
    }

}

export default PersonCard;