import Route from '../interfaces/RouteInterface';

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const routes: Array<Route> = [
	{
		id: 1,
		name: 'Home',
		url: '/',
		Component: Home,
	},
	{
		id: 2,
		name: 'About',
		url: '/about',
		Component: About,
	},
	{
		id: 3,
		name: 'Contact',
		url: '/contact',
		Component: Contact,
	},
];

export default routes;