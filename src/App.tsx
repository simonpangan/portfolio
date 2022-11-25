import React from 'react';

import './assets/css/styles.scss';

import Navbar from "./fragments/Navbar";
import Footer from "./fragments/Footer";

import {Routes, Route} from "react-router-dom";

import routes from "./variables/routes";
import BlogContent from "@/pages/Blog/BlogContent";
import BlogContentInfo from "@/pages/Blog/BlogContentInfo";

function App() {
    const routeComponents = routes.map(
        ({url, Component}, key) => {
            return <Route path={url} element={<Component />} key={key} />
        }
    );

    return (
        <div className="App">
            <Navbar/>

            <div className="container-fluid px-0">
                <Routes>
                    {routeComponents}
                    <Route path='/blogs/:title' element={<BlogContent />} />
                        <Route path='/contentInfo' element={<BlogContentInfo />} />
                </Routes>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
