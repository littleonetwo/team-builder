import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form.js'
import Team from './components/Team.js'


function App() {

  const [teamList, setTeamList] = useState([
    {
      name: "John Doe",
      role: "You tell me!",
      email: "you@youface.com",
      id:1
    }
  ]);
  const [memberToEdit, setMemberToEdit] = useState([]);

  const editMember = info =>{
    const editMem = setMemberToEdit(info);
    console.log(memberToEdit);
  };

  const addNewTeam = info =>{
    const newMem = setTeamList([...teamList, info]);

  };

  return (
    <div className="App">

      <h1>My current Team</h1>

      <Team
        teamList={teamList}
        editMember={editMember}

      />

      <Form
        addNewTeam={addNewTeam}

      />

    </div>
  );
}

export default App;
