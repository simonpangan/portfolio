import React from 'react';
import me from "@assets/img/me.jpg";
import Article from "@/pages/Blog/Article";


const Card = (props: { children: Article; }) => {

    const { title, subtitle, img, date } = props.children;

    return (
        <div className="card card-default">
            <div className="card-body">
                <div className="text-deco-none display-5">
                    {title}
                </div>
                <p className="fs-4 text-muted card-text mt-md-2">
                    {subtitle}
                </p>
                <div className="d-flex">
                    <div>
                        <img className="rounded-circle img-fluid icon" src={me}/>
                    </div>
                    <div className="pb-0 mb-0 ms-2 align-self-center">
                        <span>Simon Pangan</span>
                        <span className="text-black-50 d-block">
                            {date}
                        </span>
                    </div>
                </div>
            </div>
            <img className="w-100 d-block blog-img" src={img}/>
        </div>
    );
}

export default Card;