import React from "react";

const Team = props => {
console.log(props)

    return (
        <div className="team-container">
            <h2>List of Current Team Members</h2>
            {props.teamList.map(member => {
            return (
            <div className="member" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
            </div>
            )
        })}
        </div>
    )
}

export default Team;