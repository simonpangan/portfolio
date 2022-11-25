import React, {useEffect, useState} from 'react';

import Card from "../../components/UI/Card";

import Article, {articles} from "@/pages/Blog/Article";
import {useParams} from "react-router-dom";

import parse from "html-react-parser";

function BlogContent() {
    const { title } = useParams();
    const [articleRequest, setArticleRequest] = useState<Article>({
        id: 0,
        blog: "",
        date: "",
        img: "",
        subtitle: "",
        title: ""
    });

    useEffect(() => {
        const articleRequest = articles.find(function (article: Article, index) {
            const articleTitleSerialize =
                title?.replaceAll('-', ' ').toLowerCase();

            return articleTitleSerialize === article.title.toLowerCase();
        });

        // @ts-ignore
        setArticleRequest(articleRequest);
    });

    return (
        <article className="mx-auto blog-article">
            <Card children={articleRequest as Article}/>
            {articleRequest?.blog && parse(articleRequest?.blog as string)}
        </article>
    );
}

export default BlogContent;