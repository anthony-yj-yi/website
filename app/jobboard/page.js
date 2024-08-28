'use client'

import './Page.css';
import JobsTable from '../components/jobsTable.js';
import SearchBar from '../components/searchBar.js';
import React, { useState } from 'react';

const numberOfResults = 15

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);
  const [jobs, setJobs] = useState(null)

  const handleSearch = (data) => {
    console.log(data)
    setJobs(data)
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-between m-5 font-semibold text-gray-900 dark:text-gray-300">
          <div className="flex justify-start items-center gap-4">
            <img src={"logos/adzuna_logo.png"} alt="Adzuna Logo Not Found" className="max-h-10"/>
            <h3 className="text-2xl">Adzuna Job Search</h3>
            <h4 className="text-lg hover:cursor-pointer"
            onClick={showModal}>About</h4>
          </div>
          <SearchBar handler={handleSearch} querySize={numberOfResults}></SearchBar>
        </div>
      </header>
      <section>
        {
        jobs !== null
        ? <JobsTable jobs={jobs}></JobsTable>
        : <p className="text-center">Search jobs using the search bar at the top.</p>
        }
      </section>
      {isModalVisible && (
                <div
                    id="default-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50 flex items-center justify-center"
                >
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <div className="flex-col justify-between items-start text-left">
                                  <p className="text-xl font-semibold text-gray-900 dark:text-white">About this project</p>
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
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 justify-end">
                              <button
                                  type="button"
                                  className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  onClick={hideModal}
                              >
                                Close
                              </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </div>
  );
}