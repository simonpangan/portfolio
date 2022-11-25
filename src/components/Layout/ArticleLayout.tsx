import './ArticleLayout.css';

type Props = {
  children: JSX.Element[] | JSX.Element | string | undefined | any, //temporarily put any
};

function ArticleLayout({children} : Props) {

  return (
      <article className="blog-article mx-auto">
          {children}
      </article>
  );
}

export default ArticleLayout;
