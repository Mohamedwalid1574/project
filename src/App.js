import './App.css';
import SkillsRecommended from './view/jobs/sideBar/skills/recomm';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import Skills from './view/jobs/sideBar/skills/skillAssessments';
import SkillsIndustry from './view/jobs/sideBar/skills/indastry';
import SkillsTools from './view/jobs/sideBar/skills/tools';
import Checklist from './view/jobs/sideBar/jobseek/chesclist';
import JobSeekerfirst from './view/jobs/sideBar/jobseek/jobSeekerGudiance';
import JobSeekersecond from './view/jobs/sideBar/jobseek/jobseeksecond';
import JobSeekerThird from './view/jobs/sideBar/jobseek/jobseekthird';
import JobSeekerForth from './view/jobs/sideBar/jobseek/jobseekforth';
function App() {
  return (

    <>
    <Router>
    <Routes>
      <Route path='/recommended' element={<SkillsRecommended/>}/>
      <Route path='/assessment' element={<Skills/>}/>
      <Route path='/industry' element={<SkillsIndustry/>}/>
      <Route path='/tools' element={<SkillsTools/>}/>
      <Route path='/check' element={<Checklist/>}/>
      <Route path='/first' element={<JobSeekerfirst/>}/>
      <Route path='/second' element={<JobSeekersecond/>}/>
      <Route path='/third' element={<JobSeekerThird/>}/>
      <Route path='/forth' element={<JobSeekerForth/>}/>
      </Routes>
    </Router>
    </>

  );

}

export default App;
