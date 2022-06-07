import React, { useState } from "react";
import Datepicker from "../datepicker/Datepicker";
import "./Form.css";

export const Form = ({ allPlayers, addPlayers }) => {
  const [player, setPlayer] = useState({});

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

  // Function to change the date from the datepicker
  const onChangeBirthDate = ({ date }) => {
    setPlayer({ ...player, birthDate: date });
  };

  return (
    <div>
      <form>
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
                value={player.name}
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
                value={player.age}
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
                value={player.weight}
              ></input>
            </div>
          </div>
          <div className="field">
            <label className="label">Birth date</label>
            <div className="control">
              <Datepicker
                setDate={onChangeBirthDate}
                date={player.birthDate}
              ></Datepicker>
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
                value={player.gamePosition}
              ></input>
            </div>
          </div>
          <div className="control">
            <input
              className="button is-primary"
              type="submit"
              value="Add"
              onClick={onClick}
            ></input>
          </div>
        </div>
      </form>

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
