import React from 'react';

import BlogArticle from "./BlogArticle";
import BlogHeader from "./BlogHeader";

import {articles} from "./Article";
import RegularList from "../../patterns/RegularList";

function Blog() {

    return (
        <>
            <BlogHeader />
            <div className="pt-3">
                <RegularList
                    items={articles}
                    resourceName="children" // pass articles as named children rather than props
                    itemComponent={BlogArticle}
                />
            </div>
        </>
    );
}

export default Blog;
