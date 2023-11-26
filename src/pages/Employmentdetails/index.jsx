import React from "react";
import Header from "components/Header";
import { Link } from "react-router-dom";

const EmploymentdetailsPage = () => {
  const handleNextClick = () => {
    // Add any logic or state changes you need before navigating
    // (e.g., form validation or data processing)
  };
  return (
    <>
      <Header className="bg-white-A700 flex md:flex-col md:gap-12 h-[72px] md:h-auto items-center justify-between md:px-5 px-[98px] py-[9px] w-full" />
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Employment Details
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
                Employment Status
              </label>
              <input
                id="firstname"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Job title
              </label>
              <input
                id="surname"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Current Employer
              </label>
              <input
                id="dob"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Time at Employment
            </h3>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Years
              </label>
              <input
                id="street"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Months
              </label>
              <input
                id="city"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Work Contact Info
            </h3>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Email
              </label>
              <input
                id="marital"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* <h3 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Phone number
            </h3> */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Phone Numbers
              </label>
              <input
                id="fname"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Postal Address
              </label>
              <input
                id="lname"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Income Details
            </h3>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Monthly Gross Payment
              </label>
              <input
                id="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

          </div>

          <div className="flex justify-end mt-6">
          <div className="flex justify-end mt-6">
        {/* Use Link to navigate to the specified URL */}
        <Link to="/bankingdetails">
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

export default EmploymentdetailsPage;
