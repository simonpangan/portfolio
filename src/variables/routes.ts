import Route from '../interfaces/RouteInterface';

import Home from "../pages/Home/Home";
import About from "../pages/About/About";

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
];

export default routes;