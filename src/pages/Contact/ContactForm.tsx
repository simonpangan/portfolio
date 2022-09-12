import './ContactForm.scss';
import Input from "../../components/UI/Form/Input";
import Form, { FormContext } from "../../context/Form";
import React, {useContext} from "react";

function ContactForm() {

    const submit = (event: React.FormEvent<HTMLFormElement>, form : {}) => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <section className="shadow mt-4">
            <div className="p-2">
                <h3 className="fs-1 text-center">Get In Touch</h3>
                <Form submit={submit} className='mx-auto py-4 px-3'>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Input name='name' type='text' label='Name' />
                            <Input name='email' type='text' label='Email' />
                        </div>
                        <div className="col-12 col-md-6 mt-md-0 mb-3"><label
                            className="form-label">Message</label>
                            <textarea className="form-control" rows={5} style={{"height": "125px"}}></textarea>
                        </div>
                    </div>
                    <div className="text-md-end d-grid d-md-block">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </Form>
            </div>
        </section>
    );
}

export default ContactForm;
