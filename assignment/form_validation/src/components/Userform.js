import React, {useReducer} from "react";

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};



function reducer(state = initialState, action) {
    switch(action.type){
        case 'firstName':
            return  (
                {
                    ...state,
                    value : action.payload
                }
            );
        case 'lastName':
            return (
                {
                    ...state,
                    value: action.payload
                }
            
            );
        case 'email':
            return (
                {
                    ...state,
                    value: action.payload
                }
            );
        default:
            return state;
    }
}


const Userform = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
    
    return (
        <div>
            <form >
                <label htmlFor="fistName">First Name:</label>
                <input type="text" name = "firstName"  onChange = {handleChange} />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name = "lastName" value = {state.lastName.value} onChange = {(e) => handleChange}/>
                <label htmlFor="email">Email:</label>
                <input type="text" name = "email" value = {state.email.value} onChange = {(e) => handleChange} />

                <button type="submit">Click!</button>        
            
            </form>

        </div>
    )
}

export default Userform;