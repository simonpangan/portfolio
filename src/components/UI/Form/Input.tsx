import React, {useContext, useState} from "react";
import {FormContext} from "../../../Context/Form";

type Props = {
    label: string,
    name: string,
    type: "text",
    // handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ label, name, type} : Props) {
    // const [error, setError] = useState(false);

    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;

    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input className="form-control" type={type} name={name} value={form[name]} onChange={handleFormChange} />
        </div>
    );
}

export default Input;
