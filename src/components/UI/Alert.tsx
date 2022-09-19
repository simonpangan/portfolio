import './Alert.scss';
import React from "react";
import 'bootstrap/js/dist/alert';

type Props = {
    dismissable?: boolean,
    children: JSX.Element | string,
    type?: 'submit' | 'button',
}

function Alert({children, type = 'button', dismissable = false} : Props) {

    return (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            {children}
            {dismissable &&  (
                <button type={type} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            )}
        </div>
    );
}

export default Alert;
