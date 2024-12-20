'use client'

import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:mx-20 p-4 mt-3 ml-3">
                <button
                    type="button"
                    className="inline-flex items-center p-2  text-sm rounded-lg md:hidden text-gray-400 bg-gray-700 dark:bg-gray-900"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 md:bg-transparent bordermd:border-0 rounded-lg bg-gray-800 border-gray-700">
                        <li className="relative group">
                            <a href="/#about-me" className="block py-2 px-3 text-white rounded md:p-0" onClick={() => setIsOpen(!isOpen)}>Home</a>
                        </li>
                        <li className="relative group">
                            <a href="/#my-skills" className="block py-2 px-3 text-white rounded  md:p-0" onClick={() => setIsOpen(!isOpen)}>My Skills</a>
                        </li>
                        <li className="relative group">
                            <a href="/#my-experience" className="block py-2 px-3 text-white rounded  md:p-0" onClick={() => setIsOpen(!isOpen)}>My Experience</a>
                        </li>
                        <li className="relative group">
                            <a href="/#contact-me" className="block py-2 px-3  text-white rounded  md:p-0" onClick={() => setIsOpen(!isOpen)}>Contact Me</a>
                        </li>
                        <li className="relative group">
                            <button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 md:border-0 md:p-0 text-white md:hover:text-blue-500 focus:text-white hover:bg-gray-700 md:hover:bg-transparent">Projects
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div id="dropdownNavbar" className="absolute hidden group-hover:block md:group-hover:block hover:block font-normal divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <a href="/jobboard" className="block px-4 py-2 hover:bg-gray-600 text-white">Adzuna Job Search</a>
                                    </li>
                                    <li>
                                        <a href="/spinwheel" className="block px-4 py-2 hover:bg-gray-600 text-white">Dynamic Spin Wheel</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}