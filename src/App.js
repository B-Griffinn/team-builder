import React,{ useState } from 'react';
import './App.css';

import TeamForm from "./Components/TeamForm";
import Team from "./Components/Team";
import data from "./data";

function App() {
const [teamMembers, setTeamMembers] = (data);
const addNewTeamMember = teamMember => {
  setTeamMembers([...teamMembers, teamMember])
}
  return (
    <div className="App">
      <header className="App-header">
        <Team addNewTeamMember={addNewTeamMember}/>
        <TeamForm data={teamMembers}/>
      </header>
    </div>
  );
}

export default App;
