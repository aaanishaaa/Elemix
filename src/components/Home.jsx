import { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import herobg from '../assets/hero_bg.png';
const Home = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <div >
                <img
                    src={herobg}
                    alt="Background"
                    className="absolute inset-0 z-2 p-10 h-full w-full"
                />
                <div className="relative z-0">
                    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-purple-900 text-white">
                        {/* Navigation */}
                        <nav className="flex items-center justify-between p-6 max-w-8xl mx-auto">
                            <div className="flex items-center">

                            </div>
                            <div className="hidden md:flex items-center space-x-8 mt-8">
                                <a
                                    href="#"
                                    className="text-white transition-colors border-b-2 border-teal-400 pb-1
                                        hover:border-b-2 hover:border-teal-400 hover:text-teal-300 border-b-transparent"
                                    style={{ borderBottomWidth: '2px', borderColor: 'transparent' }}
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors border-b-2 border-b-transparent hover:border-teal-400 pb-1"
                                >
                                    Product
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors border-b-2 border-b-transparent hover:border-teal-400 pb-1"
                                >
                                    Services
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors border-b-2 border-b-transparent hover:border-teal-400 pb-1"
                                >
                                    Why Us
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors border-b-2 border-b-transparent hover:border-teal-400 pb-1"
                                >
                                    Resources
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors border-b-2 border-b-transparent hover:border-teal-400 pb-1"
                                >
                                    About
                                </a>
                            </div>

                            <div className="relative inline-flex items-center justify-center gap-10 group">
                                <div
                                    className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                                ></div>
                                <div className='p-2'>
                                    <a
                                        role="button"
                                        className="group relative inline-flex items-center justify-center text-base rounded-md bg-gradient-to-r from-teal-500 to-purple-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                                        href="#"
                                    >Create<svg
                                        aria-hidden="true"
                                        viewBox="0 0 10 10"
                                        height="10"
                                        width="10"
                                        fill="none"
                                        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                                    >
                                            <path
                                                d="M0 5h7"
                                                className="transition opacity-0 group-hover:opacity-100"
                                            ></path>
                                            <path
                                                d="M1 1l4 4-4 4"
                                                className="transition group-hover:translate-x-[3px]"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </nav>

                        {/* Main Content */}
                        <div className="flex items-center justify-center min-h-[90vh] px-6">
                            <div className="text-center max-w-7xl mx-auto">
                                <h1 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
                                    An <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Open-Source</span>
                                    <br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-purple-300">UI Library</span> by
                                    <br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">CodeChef ABESEC</span>
                                </h1>

                                <p className="text-xl md:text-1xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                                    <span className="font-semibold text-white">A community-driven collection of UI elements.</span>
                                    <br />
                                    Copy in HTML, CSS, Tailwind, React, and Figma
                                </p>

                                {/* Search Bar */}
                                <div className="relative max-w-2xl mx-auto mb-8">
                                    <div className="relative bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-">
                                        <div className="flex items-center bg-black/40 rounded-xl">
                                            <div className="flex items-center pl-6 pr-4">
                                                <Search className="w-6 h-6 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Search for the Components"
                                                value={searchValue}
                                                onChange={(e) => setSearchValue(e.target.value)}
                                                className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg py-4 pr-4 focus:outline-none"
                                            />
                                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg mr-2 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                                                <ArrowRight className="w-5 h-5 text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
                                    <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
