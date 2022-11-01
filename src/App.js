import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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

function App() {
  return (
   <Router>
     <div>


<Routes>
<Route path="/mynetwork" element={<Mynetwork/>} />
<Route path="/connection" element={<Connection/>} />
<Route path="/contacts" element={<Contact/>} />
<Route path="/events" element={<Events/>} />
<Route path="/groups" element={<Groups/>} />
<Route path="/hashtages" element={<Hashtages/>} />
<Route path="/pages" element={<Pages/>} />
<Route path="/peopleIFollow" element={<Peopleifollow/>} />
<Route path="/pageofgroup" element={<Pageofgroup/>} />
<Route path="/profile" element={<Profile/>} />
</Routes>

   </div>
   </Router>
  );
}

export default App;
