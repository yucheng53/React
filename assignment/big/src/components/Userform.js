import React,{useState} from 'react';

const Userform = (props) => {
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [confirmPass, setConfirm] = useState('');

const createUser = (e) => {
    e.preventDefault();
    const newUser = {firstName, lastName, email, password, confirmPass};
}

    return(
        <div>
            <form>
                <div class="mb-3">
                    <label for="firstName" class="form-label">First Name: </label>
                    <input type="text" class="form-control" onChange={(e) => setFirst(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name: </label>
                    <input type="text" class="form-control" onChange={(e) => setLast(e.target.value)} />
                </div>                
                <div class="mb-3">
                    <label for="email" class="form-label">Email address: </label>
                    <input type="text" class="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password: </label>
                    <input type="password" class="form-control" onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="confirmPassword" class="form-label">Confirm Password: </label>
                    <input type="password" class="form-control" onChange={(e) => setConfirm(e.target.value)}/>
                </div>
            </form>
            <h5>Your Form Data</h5>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPass}</p>
            
            
        </div>
    )
}

export default Userform;