import React from 'react';
import './HomeFeaturedProjects.css';
import me from '../../assets/img/me.jpg';

function HomeFeaturedProjects() {
    return (
        <section className="p-2 mt-2">
            <div>
                <h3 className="text-center mt-3">Featured Projects</h3>
                <div className="row gy-3 gy-md-0 mx-auto mt-2 home-row">
                    <div className="col-sm-6 col-md-4 mx-auto">
                        <div className="card card-hover">
                            <img src={me} />
                            <div className="card-body">
                                <a className="card-title h4 feature-projects-links" href="#">Link</a>
                                <div className="text-center">
                                    <span className="badge rounded-pill bg-primary border">Laravel</span>
                                    <span className="badge bg-primary border rounded-pill">Vue.Js</span>
                                    <span className="badge bg-primary border rounded-pill">42</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
                <a className="btn btn-secondary btn-sm m-auto" type="button">View all Project</a>
            </div>
        </section>
    );
}

export default HomeFeaturedProjects;