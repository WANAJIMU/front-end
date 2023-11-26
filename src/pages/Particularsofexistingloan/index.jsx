import React from "react";
import Header from "components/Header";
import { Link } from "react-router-dom";

const ParticularsofexistingloanPage = () => {
  const handleNextClick = () => {
    // Add any logic or state changes you need before navigating
    // (e.g., form validation or data processing)
  };
  
  return (
    <>
      <Header className="bg-white-A700 flex md:flex-col md:gap-12 h-[72px] md:h-auto items-center justify-between md:px-5 px-[98px] py-[9px] w-full" />
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Particulars Of Existing Loan
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* <h3 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Employment Status
            </h3> */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Loan Amount
              </label>
              <input
                id="loan"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Lender 
              </label>
              <input
                id="lender"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Monthly Installment
              </label>
              <input
                id="dob"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Expiry State
              </label>
              <input
                id="state"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Credit Info Report Status
              </label>
              <input
                id="state"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Proposed Security For The Loan
            </h3>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Fixed Deposits
              </label>
              <input
                id="deposits"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Shares
              </label>
              <input
                id="shares"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Motor Vehicles
              </label>
              <input
                id="marital"
                placeholder="include plate number"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Do you certify ?
              </label>
              <input
                id="certify"
                type="text"
                placeholder="yes or no"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

          </div>

          <div className="flex justify-end mt-6">
          <div className="flex justify-end mt-6">
        {/* Use Link to navigate to the specified URL */}
        <Link to="/upload">
          <button
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={handleNextClick} // Optional: Add click handler for additional logic
          >
            Next
          </button>
        </Link>
      </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ParticularsofexistingloanPage;