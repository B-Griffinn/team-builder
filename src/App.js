import React,{ useState } from 'react';
import './App.css';

import TeamForm from "./Components/TeamForm";
import Team from "./Components/Team";
import data from "./data";

function App() {
const [teamMembers, setTeamMembers] = useState(data);
const addNewTeamMember = newestMember => {
  setTeamMembers([...teamMembers, newestMember])
}
  return (
    <div className="App">
      <header className="App-header">
        <Team teamList={teamMembers}/>
        <TeamForm addNewTeamMember={addNewTeamMember}/>
      </header>
    </div>
  );
}

export default App;
