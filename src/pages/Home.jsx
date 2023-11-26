import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/signuppage">Signuppage</Link>
        </li>
        <li>
          <Link to="/loginpage">Loginpage</Link>
        </li>
        <li>
          <Link to="/loansucces">Loansucces</Link>
        </li>
        <li>
          <Link to="/personalinfo">PersonalInfo</Link>
        </li>
        <li>
          <Link to="/employmentdetails">Employmentdetails</Link>
        </li>
        <li>
          <Link to="/particularsofexistingloan">Particularsofexistingloan</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <Link to="/errorpage">ErrorPage</Link>
        </li>
        <li>
          <Link to="/applicationsucces">Applicationsucces</Link>
        </li>
        <li>
          <Link to="/bankingdetails">BankingDetails</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
