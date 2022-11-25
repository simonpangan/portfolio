import React from "react";
import {BsCheckLg} from "react-icons/bs";
import RegularList from "../../patterns/RegularList";

import './HomeSkillsCard.css';


type Props = {
    list: Array<any>,
    headerIcon: string,
    headerTitle: string
}

function HomeSkillsCard({list, headerIcon, headerTitle}: Props) {
    return (
        <div className="shadow px-4 position-relative pb-1 h-100">
            <div
                className="text-center skills-icon-holder rounded-circle text-center mx-auto position-absolute">
                <img src={headerIcon} alt={headerTitle}/>
            </div>
            <div className="d-inline-block w-100" style={{marginTop: "46px"}}>
                <h4 className="text-center">
                    {headerTitle}
                </h4>
                <ul className="list-unstyled">
                    <RegularList
                        items={list}
                        resourceName='tech'
                        itemComponent={({tech}) => {
                            return (
                                <li key={tech.id}>
                                    <BsCheckLg/>
                                    <span className='ms-2'>
                                    {tech.name}
                                </span>
                                </li>
                            );
                        }}
                    />
                </ul>
            </div>
        </div>
    )
}

export default HomeSkillsCard;