import React from 'react';

import BlogArticleHeader from "./BlogArticleHeader";
import BlogHeader from "./BlogHeader";

import {articles} from "./Article";
import RegularList from "../../patterns/RegularList";
import ArticleLayout from "@/components/Layout/ArticleLayout";

function Blog() {

    return (
        <>
            <BlogHeader />
            <ArticleLayout>
                <RegularList
                    items={articles}
                    resourceName="children" // pass articles as named children rather than props
                    itemComponent={BlogArticleHeader}
                />
            </ArticleLayout>
        </>
    );
}

export default Blog;
