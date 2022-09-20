type Props = {
    text?: string,
    className?: string,
    type?: 'submit' | 'button',
    isLoading?: boolean,
    onClick?: () => any,
    children?: JSX.Element | JSX.Element[] | string,
}

function Button(
    {text, className, type = 'submit', isLoading,  onClick, children} : Props
) {

    //if children and text both exists we will choose children
    let content : any = children ? children : text;
    if (isLoading)
    {
        content = <span className="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true"></span>;
    }

    return (
        <button className={`btn ${className}`} type={type} disabled={isLoading} onClick={onClick} >
            {content}
        </button>
    );
}

export default Button;
