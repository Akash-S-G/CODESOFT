import React, { useState } from 'react'
import SearchBar from './SearchBar';
const menuItems = [
    {
        title: "Popular categories",
        items: ["IT jobs", "Sales jobs", "Marketing jobs", "Data Science jobs", "HR jobs", "Engineering jobs"],
    },
    {
        title: "Jobs in demand",
        items: ["Fresher jobs", "MNC jobs", "Remote jobs", "Work from home jobs", "Walk-in jobs", "Part-time jobs"],
    },
    {
        title: "Jobs by location",
        items: ["Jobs in Delhi", "Jobs in Mumbai", "Jobs in Bangalore", "Jobs in Hyderabad", "Jobs in Chennai", "Jobs in Pune"],
    },
];
const exploreSections = [
    {
        title: "Explore categories",
        items: [
            "Unicorn",
            "MNC",
            "Startup",
            "Product based",
            "Internet"
        ]
    },
    {
        title: "Explore collections",
        items: [
            "Top companies",
            "IT companies",
            "Fintech companies",
            "Sponsored companies",
            "Featured companies",
            "Research companies"
        ]
    },
    {
        title: "Research Companies",
        items: [
            "Interview questions",
            "Company salaries",
            "Company reviews",
            "Salary Calculator"
        ]
    }
];
const servicesSections = [
    {
        title: "Resume writing",
        items: [
            "Text resume",
            "Visual resume",
            "Resume critique"
        ], 
        title: "Find Jobs",
        items: [
            "Jobs4u",
            "Priority applicant",
            "Contact us"
        ]
    },

    {
        title: "Get recruiter's attention",
        items: [
            "Resume display",
            "Monthly subscriptions",
            "Basic & premium plans"
        ]
    },
    {
        title: "Free resume resources",
        items: [
            "Resume maker",
            "Resume quality score",
            "Resume samples",
            "Job letter samples"
        ]
    }
];

function Navbar() {
    const [hoverindex, sethoverindex] = useState(null)
    const [nav, setnav] = useState(0)
    const [search,setsearch]=useState(0)
    return (
        <div className=' p-1 flex w-screen relative'>
            <span className='left-0 text-base font-bold'>NAUKARI</span>
            <div className='relative w-screen'>
                <div className='gap-3 text-shadow-md '>
                    <span onMouseEnter={() => (sethoverindex(0), setnav(1))}
                        onMouseLeave={() => (sethoverindex(null), setnav(0))}
                        className='font-black hover:underline decoration-amber-400 decoration-3 p-3 mx-2'>Jobs</span>
                    <span className='font-black hover:underline decoration-amber-400 decoration-3 p-3 mx-2'
                        onMouseEnter={() => (sethoverindex(0), setnav(2))}
                        onMouseLeave={() => (sethoverindex(null), setnav(0))}>Companies</span>
                    <span className='font-black hover:underline decoration-amber-400 decoration-3 p-3 mx-2' onMouseEnter={() => (sethoverindex(0), setnav(3))}
                        onMouseLeave={() => (sethoverindex(null), setnav(0))}
                    >Services</span>
                </div>
                {hoverindex == 0 && nav==1 && <div className='absolute flex  top-full min-w-full lg:min-w-[50%] text-shadow-md bg-white rounded-2xl shadow-2xl p-3 mt-2' onMouseEnter={() => (sethoverindex(0), setnav(1))}
                    onMouseLeave={() => (sethoverindex(null), setnav(0))}>
                    {hoverindex == 0 && nav == 1 && menuItems.map((job, index) => (
                        <div className='w-full divide-1 items-start text-sm' key={index}>
                            <h1 className='font-semibold text-gray-800 text-base'>{job.title}</h1>
                            <ul className='divide-x-1'>
                                {
                                    job.items.map((it, id) => (
                                        <li className='hover:text-blue-400 font-sans' key={id}>{it}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}
                </div>}

                {hoverindex == 0 && nav==2 && <div className='absolute flex  top-full min-w-full lg:min-w-[50%] text-shadow-md bg-white rounded-2xl shadow-2xl p-3 mt-2 left-40' onMouseEnter={() => (sethoverindex(0), setnav(1))}
                    onMouseLeave={() => (sethoverindex(null), setnav(0))}>
                    {hoverindex == 0 && nav == 2 && exploreSections.map((job, index) => (
                        <div className='w-full divide-1 items-start text-sm' key={index}>
                            <h1 className='font-semibold text-gray-800 text-base'>{job.title}</h1>
                            <ul className='divide-x-1'>
                                {
                                    job.items.map((it, id) => (
                                        <li className='hover:text-blue-400 font-sans' key={id}>{it}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}
                </div>}

                {hoverindex == 0 && nav==3 && <div className='absolute flex  top-full min-w-full lg:min-w-[70%] text-shadow-md bg-white rounded-2xl shadow-2xl p-3 mt-2' onMouseEnter={() => (sethoverindex(0), setnav(3))}
                    onMouseLeave={() => (sethoverindex(null), setnav(0))}>
                    {hoverindex == 0 && nav == 3 && servicesSections.map((job, index) => (
                        <div className='w-full divide-1 items-start text-sm' key={index}>
                            <h1 className='font-semibold text-gray-800 text-base'>{job.title}</h1>
                            <ul className='divide-x-1'>
                                {
                                    job.items.map((it, id) => (
                                        <li className='hover:text-blue-400 font-sans' key={id}>{it}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}
                </div>}
            </div>
            <input type="text" className='bg-white border-2  ' />
            { search==1 && <div className='top-0 left-0 right-0  flex items-center justify-center absolute min-h-full'>
           <SearchBar></SearchBar>
            </div>}

        </div>
    )
}

export default Navbar