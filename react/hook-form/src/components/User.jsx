import React, { useState } from 'react';

const formStyle = {
    width: '400px'
};



const User = props => {

    let [firstName, setFirstname] = useState('');
    let [lastName, setLastname] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');


    
    return(
        <div >
            <div style= {formStyle} className="container">
            <h1>Regsitration</h1>
        
            <form action="">
                <div className= "form-group">
                <label htmlFor="" className="form-label">First Name:</label>
                <input type="text" className="form-control" onChange={(e)=> setFirstname(e.target.value)}/>
                </div>

                <div className= "form-group">
                <label htmlFor="" className="form-label">Last Name:</label>
                <input type="text" className="form-control" onChange={(e)=> setLastname(e.target.value)}/>
                </div>

                <div className= "form-group">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div className= "form-group">
                <label htmlFor="" className="form-label">Password:</label>
                <input type="password" className="form-control" onChange={(e)=> setConfirmPassword(e.target.value)}/>
                </div>

                <div className= "form-group">
                <label htmlFor="" className="form-label">Confirm Password:</label>
                <input type="password" className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <input type="submit" />
            </form>
            <hr />
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            </div>

        </div>
    );
}
export default User;