import React from 'react';

export const FutureList = () => {
    return (
        <div className="futureList">
            <h1>Incoming features</h1>
            <ul>
                <li><span className='finished'>Player labels</span> 27.08.2020</li>
                <li>Match card</li>
                <li>Player card</li>
                    <ul>
                        <li>Best rating</li>
                        <li>Worst rating</li>
                        <li>Biggest gain</li>
                        <li>Biggest drop</li>
                        <li>Average goals per match</li>
                        <li>Average goals shot per match</li>
                        <li>Aggression rating (goals shot / goals won)</li>
                        <li>Last 5 matches trend</li>
                        <li>Matches history</li>
                        <li>Top ally (quantitative)</li>
                        <li>Top enemy (quantitative)</li>
                        <li>Domination and nemesis (goals / match / enemy)</li>
                        <li>Rating history chart</li>
                        <ul>
                            <li>Group by day option</li>
                            <li>Erase time space option</li>
                        </ul>
                    </ul>
                <li>Full match analysis
                <ul>
                    <li><span className='finished'>Goals</span> 22.09.2020</li>
                    <li>Ball position</li>
                    <li>Ball posession
                        <ul>
                            <li>Proximity based</li>
                            <li>Touch based</li>
                        </ul>
                    </li>
                    <li>Previous encounters</li>
                    <li>Player position heatmap</li>
                </ul>
                </li>
            </ul>
        </div>
    )
}

export default FutureList;