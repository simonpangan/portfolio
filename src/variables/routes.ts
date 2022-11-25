import Route from '../interfaces/RouteInterface';

import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";
import Awards from "@/pages/Awards/Awards";
import BlogContentInfo from "@/pages/Blog/BlogContentInfo";


const routes: Array<Route> = [
	{
		id: 1,
		name: 'Home',
		url: '/',
		Component: Home,
	},
	// {
	// 	id: 2,
	// 	name: 'Portfolio',
	// 	url: '/portfolio',
	// 	Component: Portfolio,
	// },
	{
		id: 3,
		name: 'Blogs',
		url: '/blogs',
		Component: Blog,
	},
	// {
	// 	id: 4,
	// 	name: 'Blog Content',
	// 	url: '/blogs/:title',
	// 	Component: BlogContent,
	// },
	{
		id: 6,
		name: 'Awards',
		url: '/awards',
		Component: Awards,
	},
	{
		id: 5,
		name: 'Contact',
		url: '/contact',
		Component: Contact,
	},
];

export default routes;