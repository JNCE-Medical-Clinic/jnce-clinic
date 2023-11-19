import React from 'react';
import Banner from '@/modules/overview/banner';
import PatientsOverview from '@/modules/overview/patients-overview';
import WeeklyOverview from '@/modules/overview/weekly-overview';

const Overview = () => {
    return (
        <div className="absolute w-screen h-screen mx-auto overflow-x-hidden">
            {/* overview section */}
            <Banner />

            {/* patients analytics section */}
            <PatientsOverview />

            {/* weekly overview section */}
            <WeeklyOverview />
        </div>
    );
};

export default Overview;
