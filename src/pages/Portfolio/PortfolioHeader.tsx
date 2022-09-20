import React from 'react';
import './PortfolioHeader.scss';
import PageHeader from "../../components/Layout/PageHeader";

function PortfolioHeader() {
    return (
        <PageHeader baseClass="projects-header">
            <h1>Projects</h1>
            <p><strong>In-depth Case Studies to show you what I can offer and how I work</strong></p>
        </PageHeader>
    );
}

export default PortfolioHeader;
