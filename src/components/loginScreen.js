import React, { useState } from 'react';


function LoginScreen(props) {

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        if (formData.get('username') != '') {
            props.callBack(formData.get('username'));
        }
        else
        {
            alert('You have not entered a username');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            Please enter your reddit username to identify your vote: <input name="username" />
            <button type="submit form">Submit vote</button>
            </form>
        </div>
    )
}

export default LoginScreen