import React, { useState } from 'react';



const User = props => {
    

    
    return(
        <div>
            <form action="">
                <div>
                <label htmlFor="">First Name:</label>
                <input type="text" />
                </div>

                <div>
                <label htmlFor="">Last Name:</label>
                <input type="text" />
                </div>

                <div>
                <label htmlFor="">Age</label>
                <input type="number" />
                </div>

                <div>
                <label htmlFor="">Password:</label>
                <input type="password" />
                </div>

                <div>
                <label htmlFor="">Confirm Password:</label>
                <input type="password" />
                </div>
                
                
                




            </form>



        </div>
    );
}
export default User;