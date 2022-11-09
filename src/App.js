/* eslint-disable no-unused-vars */

import React from 'react'
import './App.css';
import SkillsRecommended from './view/jobs/sideBar/skills/recomm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import Mynetwork from "./view/myNetwork/myNetwork";
import Connection from './view/myNetwork/sideBar/connection';
import Contact from './view/myNetwork/sideBar/contacts';
import Events from './view/myNetwork/sideBar/events';
import Groups from './view/myNetwork/sideBar/groups';
import Hashtages from './view/myNetwork/sideBar/hashtags';
import Pageofgroup from './view/myNetwork/sideBar/pageofgroup/pagepfgroup';
import Pages from './view/myNetwork/sideBar/pages';
import Peopleifollow from './view/myNetwork/sideBar/peopleIFollow';
import Profile from './view/profile/profile';
import Home from './view/home/home';
import HeaderAndMessage from './view/headerAndMessage/headerAndMessage';



import Skills from './view/jobs/sideBar/skills/skillAssessments';
import SkillsIndustry from './view/jobs/sideBar/skills/indastry';
import SkillsTools from './view/jobs/sideBar/skills/tools';
import Checklist from './view/jobs/sideBar/jobseek/chesclist';
import JobSeekerfirst from './view/jobs/sideBar/jobseek/jobSeekerGudiance';
import JobSeekersecond from './view/jobs/sideBar/jobseek/jobseeksecond';
import JobSeekerThird from './view/jobs/sideBar/jobseek/jobseekthird';
import JobSeekerForth from './view/jobs/sideBar/jobseek/jobseekforth';
import Job from './view/jobs/Job';
import Prepage from './view/premium/Prepage';


import Creategroup from './view/myNetwork/sideBar/creategroup';




import Login from './view/signin';
import Signup from './view/signup';


import Interview from './view/jobs/sideBar/interviewPrep';
import Alartjobs from './view/jobs/sideBar/jobAlerts';
import ResumeBuilder from './view/jobs/sideBar/resumeBuilder';
import Notifications from './view/notification/notifications';
function App() {
  return (

    <>

      <Router>
        <Routes>
          <Route path="/mynetwork" element={<Mynetwork />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/creategroup" element={<Creategroup />} />
          <Route path="/hashtages" element={<Hashtages />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/peopleIFollow" element={<Peopleifollow />} />
          <Route path="/pageofgroup" element={<Pageofgroup />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/recommended' element={<SkillsRecommended />} />
          <Route path='/assessment' element={<Skills />} />
          <Route path='/industry' element={<SkillsIndustry />} />
          <Route path='/tools' element={<SkillsTools />} />
          <Route path='/check' element={<Checklist />} />
          <Route path='/first' element={<JobSeekerfirst />} />
          <Route path='/second' element={<JobSeekersecond />} />
          <Route path='/third' element={<JobSeekerThird />} />
          <Route path='/forth' element={<JobSeekerForth />} />
          <Route path='/pre' element={<Prepage/>} />
        <Route path='/job' element={<Job/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/alertjob' element={<Alartjobs/>} />
        <Route path='/builder' element={<ResumeBuilder/>} />
        <Route path='/not' element={<Notifications />} />
        <Route path='/home' element={<Home />} />
        </Routes>
      </Router>

      <div className="bg1">
        <HeaderAndMessage />
        {/* <Home /> */}
      </div>


    </>

  );

}

export default App;
