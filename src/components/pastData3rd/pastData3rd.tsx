import React, {useEffect } from 'react';
import moment from 'moment';
import * as Highcharts from 'highcharts/highstock';
import { SecondSeasonData } from './3rdSeasonData'


export const PastData3rd = () => {
    let processedData: any = {}
    SecondSeasonData.forEach((value) => {
        if (!(value.player.name in processedData)) {
            processedData[value.player.name] = []
        }
        processedData[value.player.name].push([
            moment(value.teamSnapshot.calculatedMatch.time).valueOf(),
            value.rating,
        ])
    })
    let returnData: any = []
    Object.entries(processedData).forEach(
        ([key, value]) => returnData.push({
            type: 'line',
            name: key,
            data: value
        })
    );

    let chartData = returnData;
    useEffect(() => {
        Highcharts.chart('past-highchart-container', {
        title: {
            text: 'Rating over time',
            style: {
                color: '#FFF',
                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'white'
            },
            itemHoverStyle: {
                color: 'white'
            }
        },
        chart: {
            zoomType: 'x',
            backgroundColor: 'rgb(6, 29, 82)',
        },
        xAxis: {
            type: 'datetime',
            labels: {
                formatter: function () {
                    return moment(this.value).format('DD-MM-YYYY');
                }
            },
            min: 1632123544000,
            tickInterval: 7 * 24 * 60 * 60 * 1000
        },
        yAxis: {
            gridLineColor: 'black'
        },
        series: chartData
    })
      });
    

    return (
        <div>
            <table className="playersTable table table-striped table-hover">
    <thead>
    <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Wins</th>
        <th>Losses</th>
        <th>W/L Ratio</th>
        <th className="goalsColumn">Goals Shot</th>
        <th className="goalsColumn">Goals Won</th>
        <th className="goalsColumn">Goals Lost</th>
        <th className="goalsColumn">Aggression %</th>
        <th>Rating</th>
    </tr>
    </thead>
    <tbody>
    <tr className="playerRow">
        <td>1</td>
        <td>MaddoHatto</td>
        <td>99</td>
        <td>26</td>
        <td>79.2%</td>
        <td className="goalsColumn">285</td>
        <td className="goalsColumn">835</td>
        <td className="goalsColumn">437</td>
        <td className="goalsColumn">34.1%</td>
        <td>2131.1</td>
    </tr>
    <tr className="playerRow">
        <td>2</td>
        <td>hubigz</td>
        <td>26</td>
        <td>38</td>
        <td>40.63%</td>
        <td className="goalsColumn">142</td>
        <td className="goalsColumn">264</td>
        <td className="goalsColumn">332</td>
        <td className="goalsColumn">53.8%</td>
        <td>1428.9</td>
    </tr>
    <tr className="playerRow">
        <td>3</td>
        <td>adamaru</td>
        <td>11</td>
        <td>15</td>
        <td>42.31%</td>
        <td className="goalsColumn">48</td>
        <td className="goalsColumn">102</td>
        <td className="goalsColumn">134</td>
        <td className="goalsColumn">47.1%</td>
        <td>1291.1</td>
    </tr>
    <tr className="playerRow">
        <td>4</td>
        <td>Nelson Mandela</td>
        <td>40</td>
        <td>67</td>
        <td>37.38%</td>
        <td className="goalsColumn">286</td>
        <td className="goalsColumn">506</td>
        <td className="goalsColumn">593</td>
        <td className="goalsColumn">56.5%</td>
        <td>791</td>
    </tr>
    <tr className="playerRow">
        <td>5</td>
        <td>Amman</td>
        <td>57</td>
        <td>51</td>
        <td>52.78%</td>
        <td className="goalsColumn">320</td>
        <td className="goalsColumn">551</td>
        <td className="goalsColumn">543</td>
        <td className="goalsColumn">58.1%</td>
        <td>698.3</td>
    </tr>
    <tr className="playerRow">
        <td>6</td>
        <td>ToPP</td>
        <td>36</td>
        <td>60</td>
        <td>37.5%</td>
        <td className="goalsColumn">253</td>
        <td className="goalsColumn">438</td>
        <td className="goalsColumn">573</td>
        <td className="goalsColumn">57.8%</td>
        <td>602.6</td>
    </tr>
    <tr className="playerRow">
        <td>7</td>
        <td>Panda</td>
        <td>5</td>
        <td>9</td>
        <td>35.71%</td>
        <td className="goalsColumn">12</td>
        <td className="goalsColumn">66</td>
        <td className="goalsColumn">100</td>
        <td className="goalsColumn">18.2%</td>
        <td>290.6</td>
    </tr>
    <tr className="playerRow">
        <td>8</td>
        <td>logical-luke</td>
        <td>5</td>
        <td>10</td>
        <td>33.33%</td>
        <td className="goalsColumn">25</td>
        <td className="goalsColumn">58</td>
        <td className="goalsColumn">94</td>
        <td className="goalsColumn">43.1%</td>
        <td>-175.8</td>
    </tr>
    </tbody>
</table>
<div id='past-highchart-container'></div>
        </div>
    )
}

export default PastData3rd;
