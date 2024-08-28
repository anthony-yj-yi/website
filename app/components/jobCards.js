import { useState } from 'react';

export default function JobCard({ job, descriptionLength = 75}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => setIsModalVisible(true);
    const hideModal = () => setIsModalVisible(false);
    const truncatedDescription = job.description.substring(0, descriptionLength).trim() + '...'

    let salary = Math.round(job.salary_min);
    if (job.salary_max > job.salary_min) {
        salary = salary.toString() + ' - £' + Math.round(job.salary_max).toString();
    }
    const salaryRange = '£' + salary;

    function ExternalLinkImage() {
        return (
            <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
            </svg>
        )
    }

    function GoToButton({url}) {
        return (
            <button className="min-w-32 bg-blue-500 px-4 py-2 font-sans rounded text-white hover:bg-blue-600">
                <a
                    href={url}
                    className="inline-flex font-sans rounded items-center text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to job
                    <ExternalLinkImage></ExternalLinkImage>
                </a>
            </button>
        )
    }

    return (
        <>
            <div className="flex p-5">
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-300">{job.title}</h5>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-300">{job.company}</h3>
                    <div className="flex justify-between">
                        <p className="text-gray-900 dark:text-gray-300">{job.location}</p>
                        <p className="text-gray-900 dark:text-gray-300">{salaryRange}</p>
                    </div>
                    <hr></hr>
                    <p className="mt-3 mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">{ truncatedDescription }</p>
                    <div className="flex justify-between">
                        <button
                            className="min-w-32 bg-blue-500 px-4 py-2 font-sans rounded text-white hover:bg-blue-600"
                            onClick={showModal}
                            type="button"
                        >
                            Read more
                        </button>
                        <GoToButton url={job.redirect_url}></GoToButton>
                    </div>
                </div>
            </div>

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
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                                    <h4 className="text-l font-semibold text-gray-900 dark:text-white">{job.company}</h4>
                                </div>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                                    {job.description}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <GoToButton url={job.redirect_url}></GoToButton>
                                </div>
                                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
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
                </div>
            )}
        </>
    );
}
