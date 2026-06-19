import React from 'react'
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/dates/styles.css'
import Homepage from './Pages/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import HeaderComponent from './Header/HeaderComponent';
import Connect from './LandingPage/Connect';
import FindTalent from './Pages/FindTalent';
import TalentProfile from './Pages/TalentProfile';
import PostJob from './Pages/PostJob';
import JobDesc from './Pages/JobDesc';
import ApplyJob from './Pages/ApplyJob';
import CompaniesProfile from './Pages/CompaniesProfile';
import PostedJob from './Pages/PostedJob';
import JobHistory from './Pages/JobHistory';
import SignupPage from './Pages/SignupPage';
import UserProfile from './Pages/UserProfile';
const App = () => {
  return (
    <div className="font-['poppins']">
      <MantineProvider>
        <BrowserRouter>
        <HeaderComponent/>
         <Routes>
          <Route path="/find-jobs" element={<FindJobs/>}/>
          <Route path="/find-talents" element={<FindTalent/>}/>
          <Route path="/post-jobs" element={<PostJob/>}/>
          <Route path="/jobs" element={<JobDesc/>}/>
          <Route path="/apply-jobs" element={<ApplyJob/>}/>
          <Route path="/company" element={<CompaniesProfile/>}/>
          <Route path="/talent-profile" element={<TalentProfile/>}/>
          <Route path="/posted-job" element={<PostedJob/>}/>
          <Route path="/job-history" element={<JobHistory/>}/>
          <Route path="/sign-up" element={<SignupPage/>}/>
          <Route path="/login" element={<SignupPage/>}/>
          <Route path="/user-profile" element={<UserProfile/>}/>
          <Route path="/" element={<Homepage/>}/>
          </Routes>
          <Connect/>
        </BrowserRouter>
        </MantineProvider>;
      </div>

  )
}

export default App