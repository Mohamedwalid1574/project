
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
import SignIn from './view/signin';
import SignUp from './view/signup';
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
          <Route path="/hashtages" element={<Hashtages />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/peopleIFollow" element={<Peopleifollow />} />
          <Route path="/pageofgroup" element={<Pageofgroup />} />
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
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        </Routes>
      </Router>
    </>


  );

}

export default App;
