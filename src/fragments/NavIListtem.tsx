import './NavIListtem.scss';
import Route from '../interfaces/RouteInterface';

import { NavLink } from "react-router-dom";

type Props = {
    route: Route,
    className?: string
};

export default ({route, className = ''} : Props) =>     {
    const { id, name, url } = route;

    return (
        <li key={id} className={`nav-item navbar-item-collapse ${className}`}>
            <NavLink to={url}  className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }>
                {name}
            </NavLink>
         </li>
     )
};
