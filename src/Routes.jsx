import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const BankingDetails = React.lazy(() => import("pages/BankingDetails"));
const Applicationsucces = React.lazy(() => import("pages/Applicationsucces"));
const ErrorPage = React.lazy(() => import("pages/ErrorPage"));
const Upload = React.lazy(() => import("pages/Upload"));
const Particularsofexistingloan = React.lazy(
  () => import("pages/Particularsofexistingloan"),
);
const Employmentdetails = React.lazy(() => import("pages/Employmentdetails"));
const PersonalInfo = React.lazy(() => import("pages/PersonalInfo"));
const Loansucces = React.lazy(() => import("pages/Loansucces"));
const Loginpage = React.lazy(() => import("pages/Loginpage"));
const Signuppage = React.lazy(() => import("pages/Signuppage"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/loansucces" element={<Loansucces />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/employmentdetails" element={<Employmentdetails />} />
          <Route
            path="/particularsofexistingloan"
            element={<Particularsofexistingloan />}
          />
          <Route path="/upload" element={<Upload />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/applicationsucces" element={<Applicationsucces />} />
          <Route path="/bankingdetails" element={<BankingDetails />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
