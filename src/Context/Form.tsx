import React, {useState} from 'react';

export const FormContext = React.createContext({
    form: {},
    errors: {},
    handleFormChange: (
        event: React.ChangeEvent<any>,
        rules : { [key: string]: boolean | Object }
    ) :void  => {},
});

type Props = {
    children: JSX.Element[] | JSX.Element,
    submit: (form: Object) => void,
    initialValues?: {},
    className?: string
}

function  Form({children, submit : inputSubmit, initialValues, className}: Props) {
    const [form, setForm] = useState(initialValues || {});
    const [errors, setErrors] = useState({});

    const handleFormChange  = (
        event: React.ChangeEvent<any>, rules : {}
    ) :void =>  {
        const {name, value} = event.target;
        //
        // if (! checkValidity(value , rules)) {
        //     setErrors({
        //         ...errors,
        //         [name]: value
        //     });
        // };

        setForm({
            ...form,
            [name]: value
        });
    };

    // const  checkValidity = (value, rules) => {
    //     let isValid = true;
    //
    //     if (! rules) {
    //       return isValid;
    //     }
    //
    //     if (rules.required) {
    //         isValid = value.trim() !== '' && isValid;
    //     }
    //
    //     if (rules.minLength) {
    //         isValid = value.length >= rules.minLength && isValid;
    //     }
    //
    //     if (rules.maxLength) {
    //         isValid = value.length <= rules.maxLength && isValid;
    //     }
    //
    //     return isValid;
    // }

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        inputSubmit(form);
    }

    return (
        <form className={className} onSubmit={submit}>
            <FormContext.Provider value={{
                form,
                handleFormChange,
                errors
            }}>
                {children}
            </FormContext.Provider>
        </form>
    );
}

export default Form;