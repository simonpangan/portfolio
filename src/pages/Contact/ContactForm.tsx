import './ContactForm.scss';

function ContactForm() {
    return (
        <section className="shadow mt-4">
            <div className="p-2">
                <form className="mx-auto py-4 px-3">
                    <h3 className="fs-1 text-center">Get In Touch</h3>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-md-0 mb-3"><label
                            className="form-label">Message</label>
                            <textarea className="form-control" rows={5} style={{"height": "125px"}}></textarea>
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