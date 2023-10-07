import Sidebar from '../modules/nav/sidebar';
import React from 'react';
import Overview from '../../pages/overview';

const Home = () => {
    return (
        <div className="flex relative">
            <Sidebar />
            <Overview />
        </div>
    );
};

export default Home;
