import { useState } from 'react'
import fetchAdzunaJobs from '../modules/adzunaJobs.js';

export default function SearchBar({ handler, querySize, grow: smallScreen = false }) {
    const [searchQuery, setSearchQuery] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        const results = await fetchAdzunaJobs(searchQuery, querySize)
        handler(results)
    }

    return (
        <form className={`${smallScreen ? "w-11/12" : "w-1/4"}`} onSubmit={handleSubmit}>
            <div className="flex">
                <div className="relative w-full">
                    <input type="search" id="search" className="block px-1 py-2 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border-s-2 
                    border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Search Jobs (e.g. Software Developer)"
                        required
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-lg font-medium h-full text-white bg-blue-500 rounded-e-lg border
                     border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                    dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    )
}