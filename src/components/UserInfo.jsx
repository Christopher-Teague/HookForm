import React from 'react';

const UserInfo  = props => {
    // console.log(this.props);
    return (
        <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Confirm Password: {props.confirmPw}</p>
        </div>
    );
}

export default UserInfo;