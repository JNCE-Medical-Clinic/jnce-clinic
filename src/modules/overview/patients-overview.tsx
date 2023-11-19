import React from 'react';

const PatientsOverview = () => {
    return (
        <div className="grid grid-cols-3 gap-12 px-32 py-8">
            <div className="flex flex-col justify-end gap-4">
                <span className="font-semibold text-2xl">Patients Analytics</span>
                <div className="flex items-center bg-[#FB8884] text-white rounded-2xl p-8">
                    {/* svg */}
                    <div className="flex flex-col">
                        <span>Appointments Today</span>
                        <span>20</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end gap-4">
                <div className="flex items-center bg-jnce-green text-white rounded-2xl p-8">
                    {/* svg */}
                    <div className="flex flex-col">
                        <span>New Patients</span>
                        <span>20</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end gap-4">
                <div className="flex items-center bg-jnce-green text-white rounded-2xl p-8">
                    {/* svg */}
                    <div className="flex flex-col">
                        <span>Total Patients</span>
                        <span>20</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientsOverview;
