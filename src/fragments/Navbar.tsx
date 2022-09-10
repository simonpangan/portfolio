import './NavBar.scss'
import NavIListtem from './NavIListtem';

import RegularList from "../patterns/RegularList";

import routes from "../variables/routes";
import breakpoints from "../variables/breakpoints";

import { useWindowSize } from 'usehooks-ts';
import { useEffect, useRef } from 'react';

function NavBar() {
    const { width } = useWindowSize();
    const inputElement = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // always close the collapse navbar
        // since user may change viewport while the collapsible is still open
        // this is for css written for dynamically changing icon

        // @ts-ignore
        inputElement.current.ariaExpanded = String(false);
    });

    // @ts-ignore
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-md bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Simon.
                    </a>
                    <button ref={inputElement} className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1" aria-expanded="false">
                        <span className="visually-hidden"> Toggle navigation</span>
                        <span className="my-1 navbar-toggler-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </span>
                        <span className="navbar-toggler-open">
                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                    </button>

                    <div id="navcol-1"
                         className={width < breakpoints.md ? 'collapse navbar-collapse' : 'd-none d-md-block'}
                    >
                        <ul className="navbar-nav ms-auto">
                            <RegularList
                                items={routes}
                                resourceName="route"
                                itemComponent={NavIListtem}
                            />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
