import { Fragment } from 'react';
import AboutTab from './AboutTab';
import Banner from './Banner';
import Blog from './Blog';
import QualityTab from "./QualityTab";
import ServiceTab from './ServiceTab';
import TeamTab from './TeamTab';


const Home = () => {

    return (
        <Fragment>
            <Banner />
            <QualityTab />
            <AboutTab />
            <ServiceTab />
            <TeamTab />
            <Blog />
        </Fragment>
    );

};


export default Home;