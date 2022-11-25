import React from 'react';
import me from '@assets/img/me.jpg';
import {NavLink} from "react-router-dom";
import { BsFillCloudDownloadFill } from "react-icons/bs";


function HomeHeader() {
    console.log(import.meta.env.VITE_URL)
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
                        alt='Simon Pangan'
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
                                I'm a full stack developer based in the Philippines
                            </p>
                            <a href={`${import.meta.env.VITE_URL}/resume.pdf`} className="btn btn-outline-info me-2" download>
                                Resume
                                <BsFillCloudDownloadFill className='ms-1'/>
                            </a>
                            <NavLink to='/contact' className="btn btn-outline-light d-block d-md-inline">
                                Hire Me
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeader;
