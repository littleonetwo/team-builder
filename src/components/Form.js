import React, { useState } from 'react';


const Form = (props) =>{
  const [info, setInfo] = useState(
    {
      name: "",
      role: "",
      email: ""
    }
  );

  const handleChanges = event =>{
    setInfo({...info, [event.target.name]: event.target.value});

  };

  const submitHandler = event =>{
    event.preventDefault(); //prevent a refresh.. lets be dynamic!!

    const newMem ={
      ...info,
      id: Date.now()
    };

    props.addNewTeam(newMem);

    setInfo({name: "", role:"", email: ""}); //reset the data being moved around to prevent duplicates or errors.


  };


  return(
    <div>
      <form onSubmit={submitHandler}>
        <h1>{info.name}</h1>
        <label htmlFor="name">Name: </label>
        <input
          onChange={handleChanges}
          id="name"
          name="name"
          type="text"
          value={info.name}
        />

        <br />
        <br />

          <label htmlFor="email">Email: </label>
          <input
            onChange={handleChanges}
            id="email"
            name="email"
            type="text"
            value={info.email}
          />

          <br />
          <br />

        <label htmlFor="role">Role: </label>
        <input
          onChange={handleChanges}
          id="role"
          name="role"
          type="text"
          value={info.role}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>



  );

};

export default Form;
