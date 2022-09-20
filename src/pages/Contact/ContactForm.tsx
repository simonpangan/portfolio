import React from "react";
import './ContactForm.scss';

import useForm from "../../hooks/useForm";
import Alert from "../../components/UI/Alert";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Form/Input";

import ContactFormElements from './ContactFormElements';
import InputPosition from "../../interfaces/InputPositionInterface";

function ContactForm() {
    const {
        form, inputChangedHandler, isValidInput, post, status
    } = useForm(ContactFormElements);

    let inputs: InputPosition = {
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
                changed={(event: React.FormEvent<HTMLFormElement>) => {
                    inputChangedHandler(event, key)
                }}
                valid={element.valid}
                errorMessage={element.errorMessage}
                touched={element.touched}
            />
        );

        inputs[element.position].push(component);
    }

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (! isValidInput()) {
            return;
        }

        await post('https://formbold.com/s/6M0Mo',{subject: 'Portfolio Inquiry'});
    };

    return (
        <section className="shadow mt-4">
            <div className="p-2">
                <h3 className="fs-1 text-center">Get In Touch</h3>
                {status.success && (
                    <Alert dismissable>
                        <span className='text-center d-block'>
                            Successfully send inquiry
                            <span className='ms-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                  <path
                                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                            </span>
                        </span>
                    </Alert>
                )}

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
                       <Button isLoading={status.loading} className='btn-primary'>
                           <span className='me-1'>
                               Submit
                           </span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                               <path fillRule="evenodd"
                                     d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                               <path fillRule="evenodd"
                                     d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                           </svg>
                       </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
