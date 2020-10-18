import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BackendURL } from '../../constants'
import Table from 'react-bootstrap/Table';
import moment from 'moment';

// CR: duperela ale: foldery komponentów pisałbym z wielkiej litery, do tego plik z komponentem jak nazwiesz index.tsx to przy imporcie nie musisz wskazywać na "PlayersTable/playersTable.tsx" tylko na sam folder
// CR: do tego style w tym folderze nazwałbym tylko styles.css

interface Player {
    ID: number,
    Name: string,
    Wins: number,
    Losses: number,
    GoalsShot: number,
    GoalsScored: number,
    GoalsLost: number,
    Matches: any[],
    Rating: number,
}

// CR: otypowanie funkcyjnego komponentu przez React.FC - generykiem można podać jakie propsy przyjmuje
export const PlayersTable: React.FC = () => {

    // CR: ogólnie u mnie zawsze jest podzielony komponent na: logikę i wyświetlanie.
    // w tym wypadku wszystkie obliczenia, stan, efekty, deklaracje funkcji coś robiących są w osobnym pliku hook.tsx (hook dla tego komponentu)
    // który zwraca interface z którego korzysta komponent w index.tsx - którego jedynym celem jest wyświetlanie się na podstawie propsów i danych z hooka
    const [data, setData] = useState<Player[]>([{
        ID: 0,
        Name: "",
        Wins: 0,
        Losses: 0,
        GoalsShot: 0,
        GoalsScored: 0,
        GoalsLost: 0,
        Matches: [],
        Rating: 0
    }]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            BackendURL + "/getPlayersTable",
          );
          setData(result.data);
        };
     
        fetchData();
      }, []);

    let counter = 0;
    let maxRating = 0;
    let minRating = 2000;
    data.map(player => {
        maxRating = Math.max(maxRating, player.Rating);
        minRating = Math.min(minRating, player.Rating);
        return null
    })

    const history = useHistory();

    // CR: tu ciekawostka: funkcje deklarowane wewnątrz arrow-function są deklarowane za każdym przerenderowaniem na nowo
    // oznacza to że jeśli przekazujesz taką funkcję do niższych komponentów to przy rerenderze tego komponentu te niżej też na pewno się przerenderują - nawet jak nie muszą
    // rozwiązaniem jest wyrzucenie handleClick poza tą funkcję (my dodajemy na dole po prostu)
    function handleClick(playerID: number) {
        history.push("/showPlayer/" + playerID);
    }

    return (
        <Table striped hover className="playersTable">
            <thead>
                <tr>
                {/* CR: polecam ładować teksty w cudzysłowy, bo github mi źle wyświetlał kod bez */}
                <th>'No.'</th>
                <th>Name</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>W/L Ratio</th>
                <th className="goalsColumn">Goals Shot</th>
                <th className="goalsColumn">Goals Won</th>
                <th className="goalsColumn">Goals Lost</th>
                <th className="goalsColumn">Aggression %</th>
                <th>Rating</th>
                <th className="ratingPercent">Rating %</th>
                <th className="lastMatch">Last played</th>
                </tr>
            </thead>
            <tbody>
        
            {/* CR: spoczko, ale całą funckję mółbyś wywalić do osobnej funcji, której celem będzie wyrenderowanie zawodnika - my przyjeliśmy terminologię renderCośTam jako wskazanie że funkcja zwraca coś do wyrenderowania - te funkcje też deklarujemy na koniec tego pliku*/}
            {data.map(player => {
                let aggressionPercent = (Math.round((player.GoalsShot / player.GoalsScored) * 1000) / 10)  + "%"
                let playerRatingPercent = Math.round((1-((player.Rating - minRating) / (maxRating - minRating)))*100) + "%"

                let WLRatio = Math.round(player.Wins / (player.Wins + player.Losses) * 10000) /100 + "%"
                return (player.Wins + player.Losses > 10) &&
                Date.now() - moment(player.Matches[player.Matches.length-1].Time).unix() * 1000 < 2592000000 && // 30 days
                ++counter &&
                <tr className="playerRow" key={player.ID} onClick={() => handleClick(player.ID)}>
                    <td>{counter}</td>
                    <td>{player.Name}</td>
                    <td>{player.Wins}</td>
                    <td>{player.Losses}</td>
                    <td>{WLRatio}</td>
                    <td className="goalsColumn">{player.GoalsShot}</td>
                    <td className="goalsColumn">{player.GoalsScored}</td>
                    <td className="goalsColumn">{player.GoalsLost}</td>
                    <td className="goalsColumn">{aggressionPercent}</td>
                    <td>{Math.round(player.Rating * 10)/10}</td>
                    <td className="ratingPercent">{playerRatingPercent}</td>
                    {
                        player.Matches[0] !== undefined && 
                        <td className="lastMatch">{moment(player.Matches[player.Matches.length-1].Time).fromNow()}</td>
                    }
                </tr>
            })}
            </tbody>
        </Table>
    )
}

export default PlayersTable;
