import React from "react";
import "./Connected.css";

const Connected = (props) => {
    return (
        <div className="connected-container">
            <h1 className="connected-header">Welcome Buddy, Let's Vote</h1>
            <p className="connected-account">Metamask Account: {props.account}</p>
            {/* <p className="connected-account">Remaining Time: {props.remainingTime}</p> */}
            { props.showButton ? (
                <p className="connected-account">Great, voted</p>
            ) : (
                <div>
                    <input type="number" placeholder="Entern Candidate Index" value={props.number} onChange={props.handleNumberChange}></input>
            {/* <br /> */}
            <button className="login-button" onClick={props.voteFunction}>Vote</button>

                </div>
            )}
            
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index + 1}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default Connected;