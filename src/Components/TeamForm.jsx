import React, { useState } from "react";
import uuid from "uuid";

function TeamForm(props) {
    const [newMember, setNewMember] = useState({
        name: "",
        email: "",
        role: "",
    })
    
    const changeHandler = event => {
        //computed properties
        console.log(event.target.value);
        setNewMember({ ...newMember, [event.target.name]: event.target.value });
      };

    const submitForm = event => {
        event.preventDefault();
        const newTeamMember = {
          ...newMember,
          id: uuid()
        };
        props.addNewTeamMember(newTeamMember);
        setNewMember({ name: "", email: "", role: "" });
      };
      
    return (
        <div className="team-container">
            <h3>Team Form</h3>
            <form  onSubmit={submitForm}>
                {/* Name Input */}
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                name="name"
                placeholder="First Name"
                value={newMember.name}
                onChange={changeHandler}
                />

                {/* Email Input */}
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                name="email"
                placeholder="b@lambda.com"
                value={newMember.email}
                onChange={changeHandler}
                />

                {/* Role Input */}
                <label htmlFor="role">Role</label>
                <input 
                type="text"
                name="role"
                placeholder="i.e. Web Developer"
                value={newMember.role}
                onChange={changeHandler} 
                />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default TeamForm;