'use client'

import './jobboard.css';
import JobsTable from '../components/jobsTable.js';
import SearchBar from '../components/searchBar.js';
import React, { useEffect, useState } from 'react';

const numberOfResults = 15

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => setIsModalVisible(true)
  const hideModal = () => setIsModalVisible(false)
  const [jobs, setJobs] = useState(null)
  const [isVertical, setIsVertical] = useState(false)

  const handleSearch = (data) => {
    setJobs(data)
  }

  const checkVertical = () => {
    if (window.innerHeight > window.innerWidth) {
      setIsVertical(true)
    }
    else setIsVertical(false)
  }

  useEffect(() => {
    checkVertical();
    window.addEventListener('resize', checkVertical);
    return () => window.removeEventListener('resize', checkVertical);
  }, []);

  const horizontalHeader = (
    <div className="flex justify-between mt-5 md:mt-[4%] mb-5 ml-24 mr-24 font-semibold text-gray-900 dark:text-gray-300">
      <div className="flex justify-start items-center gap-4">
        <img src={"logos/adzuna_logo.png"} alt="Adzuna Logo Not Found" className="max-h-10 mb-1" />
        <h3 className="text-2xl">Search Jobs on Adzuna</h3>
        <h4 className="mt-1 text-lg hover:cursor-pointer"
          onClick={showModal}>About</h4>
      </div>
      <SearchBar handler={handleSearch} querySize={numberOfResults}></SearchBar>
    </div>
  )

  const verticalHeader = (
    <div className="flex flex-col justify-between m-5 font-semibold text-gray-900 dark:text-gray-300">
      <div className="flex flex-col justify-start items-center gap-4">
        <img src={"logos/adzuna_logo.png"} alt="Adzuna Logo Not Found" className="max-h-10 mb-1" />
        <h3 className="text-2xl">Search Jobs on Adzuna</h3>
        <h4 className="text-lg hover:cursor-pointer" onClick={showModal}>About</h4>
        <SearchBar handler={handleSearch} querySize={numberOfResults} grow={isVertical} />
      </div>
    </div>
  )

  const jobsResults = () => {
    if (!jobs) {
      return <p className="text-center text-lg mt-5 mx-10 text-gray-900 dark:text-gray-300">Search the Adzuna job board using the search bar at the top.</p>;
    } else if (jobs.length === 0) {
      return <p className="text-center text-lg mt-5 mx-10 text-gray-900 dark:text-gray-300">No jobs were found matching the search criteria.</p>;
    }
    return <JobsTable jobs={jobs} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          isVertical
            ? verticalHeader
            : horizontalHeader
        }
      </header>
      <section>
        {
          jobsResults()
        }
      </section>
      {isModalVisible && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50 flex items-center justify-center"
        >
          <div className="relative p-4 mt-24 md:mt-0 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div className="flex-col justify-between items-start text-left">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">About this project</p>
                </div>
                <div className="flex items-center border-t border-gray-200 rounded-b dark:border-gray-600 justify-end">
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300
                  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={hideModal}
                >
                  Close
                </button>
              </div>
              </div>
              <div className="p-4 md:p-5 space-y-4 text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                <p>
                  This project was built using React written in JavaScript. I created this project to practice using third-party
                  public APIs. I used the UK-based job search engine, Adzuna, which has a publically available API that anyone
                  can use with a daily limit of 250 searches.
                </p>
                <p>
                  Through this project, I practiced developing reusable React components and processing data retrieved from
                  API calls.
                </p>
                <p>There were quite a few challenges with the public API such as the truncated job description, lack of company
                  logo, and additional details found on the job listings on their respsective job postings. To solve these
                  challenges, the next step is to develop my own webscraper to get these details although I will most likely be
                  building this for LinkedIn, Indeed, or other job boards more relevant to me.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}