import React from 'react';

import './home.css';

import HomeHeader from "./HomeHeader";
import HomeSkillsOverview from "./HomeSkillsOverview";
import HomeFeaturedProjects from "./HomeFeaturedProjects";


function Home() {
    return (
        <>
            <HomeHeader />
            <HomeSkillsOverview />
            {/*<HomeFeaturedProjects />*/}
        </>
    );
}

export default Home;
