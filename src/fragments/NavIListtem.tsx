import './NavIListtem.scss';
import Route from '../interfaces/RouteInterface';

type Props = {
    route: Route,
    className?: string
};

export default ({route, className = ''} : Props) => {
    const { name, url } = route;

    return (
        <li key={name} className={`nav-item navbar-item-collapse ${className}`}>
             <a className="nav-link" href="portfolio.html">
                {name}
             </a>
         </li>
     )
};
