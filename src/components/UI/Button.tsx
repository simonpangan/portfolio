type Props = {
    text?: string,
    isLoading?: boolean,
    children?: JSX.Element | JSX.Element[],
    type?: 'submit' | 'button'
}

function Button({isLoading, text, type = 'submit', children} : Props) {

    //if children and text both exists we will choose children
    let content : any = children ? children : text;
    if (isLoading)
    {
        content = <span className="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true"></span>;
    }

    return (
        <button className="btn btn-primary" type={type} disabled={isLoading} >
            {content}
        </button>
    );
}

export default Button;
