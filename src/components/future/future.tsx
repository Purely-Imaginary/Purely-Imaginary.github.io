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
                    <li><span className='finished'>Best rating</span> 07.10.2020</li>
                    <li><span className='finished'>Worst rating</span> 07.10.2020</li>
                    <li><span className='finished'>Present rank</span> 07.10.2020</li>
                    <li><span className='finished'>Todays / Last week / month change</span> 07.10.2020</li>
                    <li><span className='finished'>Rating amount to drop / climb</span> 07.10.2020</li>
                    <li><span className='finished'>Biggest gain</span> 07.10.2020</li>
                    <li><span className='finished'>Biggest drop</span> 07.10.2020</li>
                    <li><span className='finished'>Average goals per match</span> 07.10.2020</li>
                    <li><span className='finished'>Average goals shot per match</span> 07.10.2020</li>
                    <li><span className='finished'>Aggression rating (goals shot / goals won)</span> 07.10.2020</li>
                    <li><span className='finished'>Last 5 matches trend</span> 07.10.2020</li>
                    <li><span className='finished'>Latest streak (matches / days)</span> 07.10.2020</li>
                    <li><span className='finished'>Biggest winning streak (matches / days)</span> 07.10.2020</li>
                    <li>Matches history</li>
                    <li><span className='finished'>Top ally (quantitative)</span> 07.10.2020</li>
                    <li><span className='finished'>Top enemy (quantitative)</span> 07.10.2020</li>
                    <li>Domination and nemesis (matches / enemy streak)</li>
                    <li><span className='finished'>Enemies table (name / matches balance)</span> 07.10.2020</li>
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