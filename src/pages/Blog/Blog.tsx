import React from 'react';

import BlogArticle from "./BlogArticle";
import BlogHeader from "./BlogHeader";

import {articles} from "./Article";

function Blog() {

    let blogArticles = articles.map(article => {
        return <BlogArticle>{article}</BlogArticle>;
    });

    return (
        <>
            <BlogHeader />
            <div className="pt-3">
                {blogArticles}
            </div>
        </>
    );
}

export default Blog;
