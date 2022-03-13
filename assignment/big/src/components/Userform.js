import React,{useState} from 'react';

const Userform = (props) => {
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [confirmPass, setConfirm] = useState('');
    const [didSubmit, setSubmit] = useState(false);
    const [firstError, setFirstError] = useState("");


const createUser = (e) => {
    e.preventDefault();
    const newUser = {firstName, lastName, email, password, confirmPass};
    console.log("Welcome ", {firstName});
    setSubmit(true);
}

const handleFirst = (e) => {
    setFirst(e.target.value);
    if (firstName.length < 2) {
        setFirstError("First Name must be at least 2 characters");
        console.log(firstError);
    }
    else {
        setFirstError("");
    }
}


    return(
        <div>
            <form onSubmit={createUser}>
                {didSubmit ? <p>Thank you for submitting the form.</p> : <p>Welcome, please sumbit the form.</p>}
                <div class="mb-3">
                    <label for="firstName" class="form-label">First Name: </label>
                    <input type="text" class="form-control" onChange={handleFirst} />
                    {firstError ? <p>{firstError}</p> : ""}                  
                    {/* {firstName.length >1 || firstName === "" ? <p></p> : <p>First Name msut be at least 2 characters</p>} */}
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name: </label>
                    <input type="text" class="form-control" onChange={(e) => setLast(e.target.value)} />
                    {lastName.length >1 || lastName === "" ? <p></p> : <p>Last Name msut be at least 2 characters</p>}
                </div>                
                <div class="mb-3">
                    <label for="email" class="form-label">Email address: </label>
                    <input type="text" class="form-control" onChange={(e) => setEmail(e.target.value)}/>
                    {email.length >4 || email === "" ? <p></p> : <p>Email msut be at least 5 characters</p>}
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password: </label>
                    <input type="password" class="form-control" onChange={(e) => setPass(e.target.value)}/>
                    {password.length >7 || password === "" ? <p></p> : <p>Password msut be at least 8 characters</p>}
                </div>
                <div class="mb-3">
                    <label for="confirmPassword" class="form-label">Confirm Password: </label>
                    <input type="password" class="form-control" onChange={(e) => setConfirm(e.target.value)}/>
                    {confirmPass != password &&  <p>Passwords must match</p>}
                </div>
                <button type="submit" class="btn btn-primary" disabled>Submit</button>
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


// import React,{useState} from 'react';

// const Userform = (props) => {
//     const [firstName, setFirst] = useState('');
//     const [lastName, setLast] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPass] = useState('');
//     const [confirmPass, setConfirm] = useState('');
//     // const [firstError, setFirstError] = useState("");
//     // const [lastError, setLastError] = useState("");
//     // const [emailError, setEmailError] = useState("");
//     // const [passError, setPassError] = useState("");
//     // const [confirmError, setConfirmError] = useState("");

// const createUser = (e) => {
//     e.preventDefault();
//     const newUser = {firstName, lastName, email, password, confirmPass};
//     console.log("Welcome ", {firstName});
// }

// const handleFirst = (e) => {
//     setFirst(e.target.value);
//     // if ...
// }


//     return(
//         <div>
//             <form>
//                 <div class="mb-3">
//                     <label for="firstName" class="form-label">First Name: </label>
//                     <input type="text" class="form-control" onChange={(e) => setFirst(e.target.value)} />
//                     {firstName.length >1 || firstName === "" ? <p></p> : <p>First Name msut be at least 2 characters</p>}
//                 </div>
//                 <div class="mb-3">
//                     <label for="lastName" class="form-label">Last Name: </label>
//                     <input type="text" class="form-control" onChange={(e) => setLast(e.target.value)} />
//                     {lastName.length >1 || lastName === "" ? <p></p> : <p>Last Name msut be at least 2 characters</p>}
//                 </div>                
//                 <div class="mb-3">
//                     <label for="email" class="form-label">Email address: </label>
//                     <input type="text" class="form-control" onChange={(e) => setEmail(e.target.value)}/>
//                     {email.length >4 || email === "" ? <p></p> : <p>Email msut be at least 5 characters</p>}
//                 </div>
//                 <div class="mb-3">
//                     <label for="password" class="form-label">Password: </label>
//                     <input type="password" class="form-control" onChange={(e) => setPass(e.target.value)}/>
//                     {password.length >7 || password === "" ? <p></p> : <p>Password msut be at least 8 characters</p>}
//                 </div>
//                 <div class="mb-3">
//                     <label for="confirmPassword" class="form-label">Confirm Password: </label>
//                     <input type="password" class="form-control" onChange={(e) => setConfirm(e.target.value)}/>
//                     {confirmPass === password ? <p></p> : <p>Passwords must match</p>}
//                 </div>
//             </form>
//             <h5>Your Form Data</h5>
//             <p>First Name: {firstName}</p>
//             <p>Last Name: {lastName}</p>
//             <p>Email: {email}</p>
//             <p>Password: {password}</p>
//             <p>Confirm Password: {confirmPass}</p>
            
            
//         </div>
//     )
// }

// export default Userform;