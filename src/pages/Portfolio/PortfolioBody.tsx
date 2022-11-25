import React from 'react';
import './PortfolioBody.scss';
import me from '../../assets/img/me.jpg';
import {skills} from "../../variables/skills";
import Button from "../../components/UI/Button";


function PortfolioBody() {

    const technologiesList = skills.map(technology => {
        return (
            <li className="list-inline-item" key={technology.id}>
                <Button className="btn-light btn-sm" onClick={() => sort(technology.id)}>{technology.name}</Button>
            </li>
        )
    });

    const sort = (id : number | string) => {
        alert(id);
    }

    return (
        <section className="mt-3">
            <div className="text-center">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <button className="btn btn-secondary btn-sm" type="button">Alll</button>
                    </li>
                    {technologiesList}
                </ul>
            </div>
            <div>
                <h3 className="text-center">Featured Projects</h3>
                <div className="row gy-3 gy-md-0 mx-auto mt-2 portfolio-row">
                    <div className="col-sm-6 col-md-4">
                        <div className="card card-hover">
                            <img className="blog-image" src={me}/>
                            <div className="card-body"><a className="card-title h4 feature-projects-links"
                                                          href="#">Link</a>
                                <div className="text-center"><span
                                    className="badge rounded-pill bg-primary border">Laravel</span><span
                                    className="badge bg-primary border rounded-pill">Vue.Js</span><span
                                    className="badge bg-primary border rounded-pill">42</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="card card-hover"><img className="blog-image"
                                                              src={me}/>
                            <div className="card-body"><a className="card-title h4 feature-projects-links"
                                                          href="#">Link</a>
                                <div className="text-center"><span
                                    className="badge rounded-pill bg-primary border">Laravel</span><span
                                    className="badge bg-primary border rounded-pill">Vue.Js</span><span
                                    className="badge bg-primary border rounded-pill">42</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mx-auto">
                        <div className="card card-hover">
                            <img src={me}/>
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
        </section>
    );
}

export default PortfolioBody;
