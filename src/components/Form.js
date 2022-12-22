import React from 'react';


function Form(){
    return(
        <center>
        <div className="formContainer">
            <input type="email" placeholder="Enter email"/>
            <input type="username" placeholder="Enter username"/>
            <input type="password" placeholder="Enter password"/>
            <input type="password" placeholder="Confirm-password"/>
            <input type="radio"></input>
            <input type="file"/>
            <button>Submit</button>
        </div>
        </center>
    );
}

export default Form;