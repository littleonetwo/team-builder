import React, { useState } from 'react';


const Team = (props) =>{
  const [id, setId] = useState("");

  const editHandler = event =>{

    event.preventDefault(); //prevent a refresh.. lets be dynamic!!

    setId(event.target.name);

    // console.log(props.teamList[0]);
    console.log(id);
    console.log(event.target.value);

    props.editMember(props.teamList[event.target.name]);


  };


  return(
    <div className="team-list">
      {props.teamList.map(mem => (
        <div className="member" key={mem.id}>
          <h2>Name: <span>{mem.name}</span></h2>
          <h2>Email: <span>{mem.email}</span></h2>
          <h2>Role: <span>{mem.role}</span></h2>

          <br />

            <input
              id={mem.id}
              name={mem.id}
              type="submit"
              value="Edit"
              onClick={editHandler}
            />

        </div>
      ))}
    </div>


  );


};

export default Team;
