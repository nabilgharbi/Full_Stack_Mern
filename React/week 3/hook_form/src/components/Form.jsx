import React from "react";
import "./styles.css";

const Form = (props) => {
    const {inputs, setInputs} = props;
    const onChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <form className="formulaire">
                <fieldset className="field">
                    <label htmlFor="first-name">First Name : </label>
                    <input type="text" name="firstName" onChange={onChange} />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="last-name">Last Name : </label>
                    <input type="text" name="lastName" onChange={onChange} />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" onChange={onChange} />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" onChange={onChange} />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="confirm-password">Confirm Password : </label>
                    <input type="password" name="confirmPassword" onChange={onChange} />
                </fieldset>

            </form>
        </>
    );
};

export default Form;
