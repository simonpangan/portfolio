import React from 'react';
import me from "../../assets/img/me.jpg";
import ui1 from "../../assets/img/ui-design-book-pages-adham-dannaway-2000x993.jpg";

const Card = () => {
    return (
        <div className="card card-default">
            <div className="card-body">
                <a className="text-deco-none display-5 blog-title" href="#">UI design books you should read in
                    2022</a>
                <p className="fs-4 text-muted card-text mt-md-2">The most practical and useful UI design books to
                    help you learn the how and why of user interface design.</p>
                <div className="d-flex">
                    <div>
                        <img className="rounded-circle img-fluid icon" src={me}/>
                    </div>
                    <div className="pb-0 mb-0 ms-2 align-self-center">
                        <span>Simon Pangan</span>
                        <span className="text-black-50 d-block">10 December 2012</span>
                    </div>
                </div>
            </div>
            <img className="w-100 d-block blog-img" src={ui1}/>
        </div>
    );
}

export default Card;