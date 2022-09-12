import React, {useContext, useState} from "react";
import {FormContext} from "../../../context/Form";

type Props = {
    label: string,
    name: string,
    type: "text",
}

function Input({ label, name, type} : Props) {
    // const [error, setError] = useState(false);

    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;

    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input className="form-control" type={type} name={name} value={(form as any)[name]} onChange={handleFormChange} />
        </div>
    );
}

export default Input;
