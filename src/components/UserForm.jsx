import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");
    // const [passwordMatchError, setPasswordMatchError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPw };
        console.log("Welcome", newUser);
    };

    const checkFirstName = (e) => {
        setFirstName(e.target.value);
            if (e.target.value.length <2){
                setFirstNameError("First name must be at least 2 characters!");
            } else if (e.target.value.length > 2) {setFirstNameError(""); };
        }

    const checkLastName = (e) => {
            setLastName(e.target.value);
            if (e.target.value.length <= 2){
                setLastNameError("Last name must be at least 2 characters!");
            } else if (e.target.value.length >= 2) {setLastNameError(""); };
        }

    const checkEmail = (e) => {
            setEmail(e.target.value);
            if (e.target.value.length <5){
                setEmailError("Email must be at least 5 characters!");
            } else if (e.target.value.length <=5) {setEmailError(""); };
        }

    const checkPassword = (e) => {
            setPassword(e.target.value);
            if (e.target.value.length < 8){
                setPasswordError("Password must be at least 8 characters!");
            } else if (e.target.value.length >= 8) {setPasswordError(""); };
        }

    const checkPasswordConfirm = (e) => {
            setConfirmPw(e.target.value);
            console.log(password);          
            // if (e.target.value.length < 8){
            //     setPasswordConfirmError("Password must be at least 8 characters!");
            // } else if (e.target.value.length >= 8) {setPasswordConfirmError("")};

            if (confirmPw !== password){
            setPasswordConfirmError("Passwords must match!");
            } else if (confirmPw === password){setPasswordConfirmError("")};
        }
            

console.log(password);
console.log(confirmPw);

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={checkFirstName} /> 
                    { firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : ''}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={checkLastName} />
                    { lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : ''}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={checkEmail} />
                    { emailError ? <p style={{color:'red'}}>{emailError}</p> : ''}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={checkPassword} />
                    { passwordError ? <p style={{color:'red'}}>{passwordError}</p> : ''}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={checkPasswordConfirm} />
                    { passwordConfirmError ? <p style={{color:'red'}}>{passwordConfirmError}</p> : ''}
                    {/* { passwordMatchError ? <p style={{color:'red'}}>{passwordMatchError}</p> : ''} */}
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h4>Form Data</h4>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPw}</p>
            </div>
        </div>
    );
};

export default UserForm;