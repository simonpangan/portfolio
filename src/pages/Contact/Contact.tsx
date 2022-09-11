import './Contact.css';

import ContactForm from "./ContactForm";
import ContactIntro from "./ContactIntro";
import ContactHeader from "./ContactHeader";

function Contact() {
    return (
        <>
            <ContactHeader />
            <div className="contact mx-auto">
                <ContactIntro />
                <ContactForm />
            </div>
        </>
    );
}

export default Contact;
