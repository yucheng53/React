import React, { useState } from "react";
import { Link } from "react-router-dom";


const AuthorForm = props => {
    const {initialAuthor, onSubmitProp, error} = props;
    const [form, setForm] = useState(initialAuthor);

    const onChangeHandler = (event) => {
        setForm(
            {...form,
            [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value}
        )
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onSubmitProp(form);
        setForm({});
    }


    return(
        <div>
            <form onSubmit={onSubmitHandler} className="d-flex flex-column justify-content-center form">
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" value = {form.name} className="form-control" name="name" placeholder="Enter name" onChange={onChangeHandler} />
                    <span className="alert-danger">{error.name && error.name.message}</span>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="color">Color:</label>
                    <input type="color" className="form-control colorcss" name="color" onChange={onChangeHandler} />
                    <span className="alert-danger">{error.color && error.color.message}</span>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="numOfRewards">Number Of Rewards:</label>
                    <input type="number" value = {form.numOfRewards} className="form-control" name="numOfRewards" placeholder="Enter number of rewards" onChange={onChangeHandler} />
                    <span className="alert-danger">{error.numOfRewards && error.numOfRewards.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="books">Books:</label>
                    <input type="text" value = {form.books} className="form-control" name="books" placeholder="Enter books" onChange={onChangeHandler} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="foreign">Foreign:</label>
                    <input type="checkbox" checked = {form.foreign} className="form-control-check ms-3" name="foreign" onChange={onChangeHandler} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="active">Active:</label>
                    <input type="checkbox" checked = {form.active} className="form-control-check ms-3" name="active"  onChange={onChangeHandler} />
                </div>

                <button type="submit" className="btn btn-primary mt-3">AuthorForm</button>
            </form>
        </div>
    )
}

export default AuthorForm;