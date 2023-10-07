'use client';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Overview from '../../assets/svgs/overview.svg';
import Clipboard from '../../assets/svgs/clipboard.svg';
import Patients from '../../assets/svgs/patients.svg';
import JnceLogo from '../../assets/images/jnce.png';

interface NavItemProps {
    path: string;
    text: string;
    icon: FC;
    isSidebarHovered: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ path, text, icon: Icon, isSidebarHovered }) => {
    return (
        <Link href={path}>
            <div className="block py-2 px-4 hover:bg-jnce-green hover:text-gray-100 hover:font-semibold mt-4">
                <div className="relative">
                    <Icon className="w-8 h-8" />
                    {isSidebarHovered && <span className="absolute top-0 ml-10 mt-1">{text}</span>}
                </div>
            </div>
        </Link>
    );
};

const Sidebar: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-col w-16 hover:w-64 sticky top-0 left-0 overflow-y-auto h-screen max-h-screen transition-all duration-200 ease-in-out bg-white z-50 hover-hide-scrollbar"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image src={JnceLogo} alt="JNCE Logo" width={50} height={50} className="my-4 ml-2" />
            <NavItem path="/" text="Overview" icon={Overview} isSidebarHovered={isHovered} />
            <NavItem path="/about" text="Patients" icon={Patients} isSidebarHovered={isHovered} />
            <NavItem
                path="/contact"
                text="Appointments"
                icon={Clipboard}
                isSidebarHovered={isHovered}
            />
        </div>
    );
};

export default Sidebar;
