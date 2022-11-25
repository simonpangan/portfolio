import React, {useEffect, useState} from 'react';

import Card from "../../components/UI/Card";

import Article, {articles} from "@/pages/Blog/Article";
import {useParams} from "react-router-dom";

import parse from "html-react-parser";


function BlogContent() {
    const { title } = useParams();
    const [articleRequest, setArticleRequest] = useState<Article>();

    useEffect(() => {
        const articleRequest = articles.find(function (article: Article, index) {
            const articleTitleSerialize =
                title?.replaceAll('-', ' ').toLowerCase();

            return articleTitleSerialize === article.title.toLowerCase();
        });

        setArticleRequest(articleRequest);
    });

    return (
        <article className="mx-auto blog-article">
            <Card />
            {articleRequest?.blog && parse(articleRequest?.blog as string)}
        </article>
    );
}

export default BlogContent;