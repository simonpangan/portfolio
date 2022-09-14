import React from "react";
import FormElement from "../../../interfaces/FormElementsInterface";

function Input(props : any) {
    const {
        elementType, elementConfig, value,
        errorMessage, valid, touched, label
    } : FormElement = props;

    const { changed, shouldValidate } = props;

    let inputClasses = ['form-control'];

    let validationError = null;
    if (! valid && shouldValidate && touched) {
        inputClasses.push('is-invalid');
        validationError = <div className="invalid-feedback">{errorMessage}</div>
    }

    let inputElement = null;
    switch (elementType) {
        case "input":
            inputElement = <input className={inputClasses.join(' ')} onChange={changed} {...elementConfig} value={value} />;
            break;
        case "textarea":
            inputElement = <textarea className={inputClasses.join(' ')} onChange={changed} {...elementConfig} value={value} />;
            break;
        default:
            throw new Error('Element does not exist');
    }

    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            {inputElement}
            {validationError}
        </div>
    );
}

export default Input;
