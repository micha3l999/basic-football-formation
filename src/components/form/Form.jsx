import React, { useState } from "react";
import "./Form.css";

export const Form = ({ allPlayers, addPlayers }) => {
  const [player, setPlayer] = useState({
    name: "",
    age: "",
    weight: "",
    birthDate: "",
    gamePosition: "",
  });

  // Function to manage on click action to save the player
  const onClick = (e) => {
    e.preventDefault();
    addPlayers({ ...player });
    setPlayer({
      name: "",
      age: "",
      weight: "",
      birthDate: "",
      gamePosition: "",
    });
  };

  // Function to manage the on change action when editing a input
  const onChange = (e) => {
    e.preventDefault();
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <div className="form-content">
        <h2 className="subtitle is-4">Register player</h2>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name="name"
              placeholder="e.g. Michael"
              onChange={onChange}
              value={player.name ?? ""}
            ></input>
          </div>
        </div>
        <div className="field">
          <label className="label">Age</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="e.g. 18"
              name="age"
              onChange={onChange}
              value={player.age ?? ""}
            ></input>
          </div>
        </div>
        <div className="field">
          <label className="label">Weight</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="e.g. 65"
              name="weight"
              onChange={onChange}
              value={player.weight ?? ""}
            ></input>
          </div>
        </div>
        <div className="field">
          <label className="label">Birth date</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="e.g. 18-05-1999"
              name="birthDate"
              onChange={onChange}
              value={player.birthDate ?? ""}
            ></input>
          </div>
        </div>
        <div className="field">
          <label className="label">Game position</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="e.g. 05"
              name="gamePosition"
              onChange={onChange}
              value={player.gamePosition ?? ""}
            ></input>
          </div>
        </div>
        <div className="control">
          <button className="button is-primary" onClick={onClick}>
            Add
          </button>
        </div>
      </div>
      <div className="form-content content">
        <div className="subtitle is-4">Players Added</div>
        <ul>
          {allPlayers.map((player) => {
            return (
              <li
                key={
                  player.name + "" + player.gamePosition + "" + player.birthDate
                }
              >
                {player.name} - {player.gamePosition}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
