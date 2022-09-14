import React from "react";
import './ContactForm.scss';
import useForm from "../../hooks/useForm";
import Input from "../../components/UI/Form/Input";
import ContactFormElements from './ContactFormElements';
import InputPosition from "../../interfaces/InputPositionInterface";


function ContactForm() {
    const { form, inputChangedHandler, isValidInput } = useForm(ContactFormElements);

    let inputs : InputPosition = {
        left: [],
        right: [],
    };

    // @ts-ignore
    for (let [key, element] of form) {
        const component = (
            <Input
                key={key}
                label={element.label}
                elementType={element.elementType}
                elementConfig={element.elementConfig}
                value={element.value}
                shouldValidate={element.validation}
                changed={ (event : React.FormEvent<HTMLFormElement>) => {
                    inputChangedHandler(event, key)
                }}
                valid={element.valid}
                errorMessage={element.errorMessage}
                touched={element.touched}
            />
        );

        inputs[element.position].push(component);
    }

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isValidInput())
        {
            alert('asd');
        }
    };

    return (
        <section className="shadow mt-4">
            <div className="p-2">
                <h3 className="fs-1 text-center">Get In Touch</h3>
                {/*for future refence/improvements to use React context*/}
                {/*<Form submit={submit} className='mx-auto py-4 px-3'>*/}
                <form className='mx-auto py-4 px-3' onSubmit={submit}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            {inputs.left}
                        </div>
                        <div className="col-12 col-md-6 mt-md-0 mb-3">
                            {inputs.right}
                        </div>
                    </div>
                    <div className="text-md-end d-grid d-md-block">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
