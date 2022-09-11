import React from 'react';
import './BlogArticle.css';

import Article from "./Article";

type Props = {
    children: Article,
};

function BlogArticle({children}: Props) {

    const { title, subtitle, img, date } = children;

    return (
        <article className="mx-auto blog-article mt-3">
            <div className="card card-default">
                <img className="w-100 d-block blog-img" src={img} alt={title}/>
                <div className="card-body">
                    <a className="text-deco-none display-5 blog-title" href="#">
                        {title}
                    </a>
                    <p className="fs-4 text-muted card-text mt-md-2">
                        {subtitle}
                    </p>
                    <div className="d-flex">
                        <div>
                            <img
                                className="rounded-circle img-fluid icon"
                                src={img}
                                alt="Simon Pangan"
                            />
                        </div>
                        <div className="pb-0 mb-0 ms-2 align-self-center">
                            <span>Simon Pangan</span>
                            <span className="text-black-50 d-block">{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default BlogArticle;
