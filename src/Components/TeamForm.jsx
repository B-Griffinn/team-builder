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
        setNewMember({ name: "", email: "", row: "" });
      };
      
    return (
        <div className="team-container">
            <h3>Team Form</h3>
            <form>
                {/* Name Input */}
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                name="name"
                placeholder="First Name"
                // value=""
                onChange={changeHandler}
                />

                {/* Email Input */}
                <label htmlFor="email">Email</label>
                <input 
                type="text"
                name="email"
                placeholder="b@lambda.com"
                // value=""
                onChange={changeHandler}
                />

                {/* Role Input */}
                <label htmlFor="role">Role</label>
                <select name="role">
                    <option value="">Frontend Engineer</option>
                    <option value="">Backend Engineer</option>
                    <option value="">Designer</option>
                </select>
            </form>
        </div>
    )
}

export default TeamForm;