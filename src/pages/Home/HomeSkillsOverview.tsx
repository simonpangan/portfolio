import React from 'react';

import HomeSkillsCard from "./HomeSkillsCard";

import backendIcon from '../../assets/img/backend-icon.svg';
import frontendIcon from '../../assets/img/frontend-icon.svg';
import otherSkills from '../../assets/img/other-skills-icon.svg';

import {techStack} from "../../variables/skills";


function HomeSkillsOverview() {

    const icons: { [key: string]: string } = {
        'Backend': backendIcon,
        'Frontend': frontendIcon,
        'Others': otherSkills,
    }

    const list = Object.entries(techStack).map(
        ([key, value]) => (
            <div className="col-sm-6 col-md-4 pt-5 mx-auto" key={key}>
                <HomeSkillsCard
                    list={value}
                    headerIcon={icons[key]}
                    headerTitle={key}
                />
            </div>
        )
    );

    return (
        <section className="p-2 mt-3">
            <h3 className="text-center">Skills Overview</h3>
            <p className="text-center mx-auto" style={{maxWidth: '780px'}}>
                &nbsp;I have more than 3 years'
                experience building rich web applications for clients. Below is a quick overview of my main
                technical skill sets and tools I use.
            </p>
            <div>
                <div className="row gy-3 gy-md-0 mx-auto mt-2 home-row">
                    {list}
                </div>
            </div>
        </section>
    );
}

export default HomeSkillsOverview;