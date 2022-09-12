import React, {useState} from 'react';

export const FormContext = React.createContext({
    form: {},
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) :void  => {},
});

type Props = {
    children: JSX.Element[] | JSX.Element,
    submit: (event: React.FormEvent<HTMLFormElement>, form: {}) => void,
    initialValues?: {},
    className?: string
}

function Form({children, submit, initialValues, className}: Props) {
    const [form, setForm] = useState(initialValues || {});

    const handleFormChange  = (event: React.ChangeEvent<HTMLInputElement>) :void =>  {
        const {name, value} = event.target;

        setForm({
            ...form,
            [name]: value
        });
    };

    return (
        <form className={className} onSubmit={(event) => submit(event, form)}>
            <FormContext.Provider value={{
                form,
                handleFormChange
            }}>
                {children}
            </FormContext.Provider>
        </form>
    );
}

export default Form;