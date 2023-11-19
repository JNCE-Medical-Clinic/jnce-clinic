import React from 'react';

const Banner = () => {
    return (
        <div className="mt-8 grid grid-cols-4 gap-12 px-32 py-8">
            <div className="col-span-2 bg-jnce-green rounded-2xl p-8">
                <div className="flex text-white">
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-4xl">Hi, Admin!</span>
                        <p>
                            This is your overview page, you can track patients, appointments and
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
    );
};

export default Banner;
