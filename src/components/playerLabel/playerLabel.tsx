import React from 'react';
import { useHistory } from 'react-router-dom';

interface PlayerSnapshot {
    PlayerID: number,
    PlayerName: string,
    Rating: number
}


export const PlayerLabel = (player: PlayerSnapshot) => {
    const playerLink = "#/showPlayer/" + player.PlayerID

    const history = useHistory();
    function handlePlayerClick(playerID: number) {
        history.push("#/showMatch/" + playerID);
    }

    return (
        <div className="playerLabel">
            <div onClick={() => handlePlayerClick(player.PlayerID)}>
                <a href={playerLink}>
                    <span className="playerName">{player.PlayerName}</span>
                    {player.Rating !== 0 &&
                        <span className="playerRating"> - {Math.round(player.Rating)}</span>
                    }
                </a>
            </div>
        </div>
    )
}

export default PlayerLabel;
