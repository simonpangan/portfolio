import React from 'react';

import me from '../../assets/img/me.jpg';

function Header() {
    return (
        <section className="bg-secondary p-md-4">
            <div className="row justify-content-center" style={{maxWidth: 1500}}>
                <div
                    className="col-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3 text-center text-md-end align-self-center pt-4 pt-md-0 ps-0 pe-md-0">
                    <img
                        className="img-fluid border rounded border-0"
                        data-aos="fade-right"
                        data-aos-duration={700}
                        data-aos-once="true"
                        src={me}
                        style={{display: "inline"}}
                        height="250px"
                        width="260px"
                    />
                </div>
                <div className="col-md-7">
                    <div className="card card-default">
                        <div
                            className="card-body text-center text-md-start text-white"
                            data-aos="fade-left"
                            data-aos-duration={700}
                        >
                            <h6 className="fs-4 card-subtitle mb-2">
                                Hello, my name is
                                <br/>
                            </h6>
                            <h4 className="display-4 card-title">Simon Pangan</h4>
                            <p className="card-text">
                                I'm a full-stack developer specialised in frontend and backend
                                development for complex scalable web apps. I write about web
                                development on my blog and regularly speak at various web
                                conferences and meetups. Want to know how I may help your project?
                                Check out my project case studies and resume.
                            </p>
                            <a className="btn btn-outline-light d-block d-md-inline" href="#">
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
