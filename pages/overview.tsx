import React from 'react';

const Overview = () => {
    return (
        <div className="absolute w-screen h-screen mx-auto overflow-x-hidden">
            {/* overview section */}
            <div className="mt-8 grid grid-cols-4 gap-12 px-32 py-8">
                <div className="col-span-2 bg-jnce-green rounded-2xl p-8">
                    <div className="flex text-white">
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-4xl">Hi, Admin!</span>
                            <p>
                                This is your overview page, you can track patients, appointmens and
                                others!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8">
                    <span>+11</span>
                </div>
                <div className="bg-white rounded-2xl p-8">
                    <span>+12</span>
                </div>
            </div>

            {/* patients analytics section */}
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

            {/* graph section */}
            <div className="grid grid-cols-1 px-32 py-8">
                <div className="bg-white h-[17rem] rounded-2xl p-8">
                    <span className="font-semibold text-2xl">
                        This Week&apos;s Appointment Overview
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Overview;
