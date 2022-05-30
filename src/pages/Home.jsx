import axios from "axios";
import React, { useEffect, useState } from "react";
import { Field } from "../components/field/Field";
import { Form } from "../components/form/Form";

export const Home = () => {
  const [playersOnField, setPlayersOnField] = useState([]);
  const [allPlayers, setAllPlayers] = useState([]);
  const [gameLineup, setGameLineup] = useState("");
  const [allLineups, setLineups] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllLineups()
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Get the lineups from the database
  const getAllLineups = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/lineups/");
      if (response.data) {
        const lineupsKeys = Object.keys(response.data.data);
        setLineups(response.data.data);
        setGameLineup(lineupsKeys[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Function to add the player to the field
  const addPlayerToField = (playerToAdd = {}, position = "") => {
    const playersCopy = [...playersOnField];
    playersCopy[parseInt(position)] = playerToAdd;
    setPlayersOnField(playersCopy);
    const reduceAllPlayer = allPlayers.filter(
      (player) => player.name !== playerToAdd.name
    );
    setAllPlayers([...reduceAllPlayer]);
  };

  // Add players to my available players
  const addPlayers = (player = {}) => {
    setAllPlayers([...allPlayers, player]);
  };

  // Function to change the game lineup
  const changeLineup = (lineup = "") => {
    setGameLineup(lineup);
  };

  // Function to send a player off the field
  const sendPlayerOff = (playerIndex = "") => {
    const playersFieldCopy = [...playersOnField];
    const ejectedPlayer = playersFieldCopy.splice(playerIndex, 1, {});
    setPlayersOnField([...playersFieldCopy]);
    addPlayers(ejectedPlayer[0]);
  };

  return (
    <div>
      <h1 className="title is-2">Football Lineup</h1>
      {isLoading && (
        <div>
          <div>
            <progress className="progress is-small is-primary " max="100">
              15%
            </progress>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="">
          <Field
            currentLineup={gameLineup}
            playersOnField={playersOnField}
            setLineup={changeLineup}
            allPlayers={allPlayers}
            addPlayerToField={addPlayerToField}
            sendPlayerOff={sendPlayerOff}
            allLineups={allLineups}
          />
          <Form allPlayers={allPlayers} addPlayers={addPlayers} />
        </div>
      )}
    </div>
  );
};
