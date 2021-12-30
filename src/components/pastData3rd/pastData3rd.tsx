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
        <td>83</td>
        <td>30</td>
        <td>73.45%</td>
        <td className="goalsColumn">255</td>
        <td className="goalsColumn">685</td>
        <td className="goalsColumn">362</td>
        <td className="goalsColumn">37.2%</td>
        <td>1759.2</td>
    </tr>
    <tr className="playerRow">
        <td>2</td>
        <td>Nelson Mandela</td>
        <td>34</td>
        <td>47</td>
        <td>41.98%</td>
        <td className="goalsColumn">229</td>
        <td className="goalsColumn">367</td>
        <td className="goalsColumn">395</td>
        <td className="goalsColumn">62.4%</td>
        <td>1200.9</td>
    </tr>
    <tr className="playerRow">
        <td>3</td>
        <td>hubigz</td>
        <td>27</td>
        <td>33</td>
        <td>45%</td>
        <td className="goalsColumn">115</td>
        <td className="goalsColumn">255</td>
        <td className="goalsColumn">304</td>
        <td className="goalsColumn">45.1%</td>
        <td>1064</td>
    </tr>
    <tr className="playerRow">
        <td>4</td>
        <td>panda</td>
        <td>9</td>
        <td>8</td>
        <td>52.94%</td>
        <td className="goalsColumn">24</td>
        <td className="goalsColumn">74</td>
        <td className="goalsColumn">86</td>
        <td className="goalsColumn">32.4%</td>
        <td>946.7</td>
    </tr>
    <tr className="playerRow">
        <td>5</td>
        <td>ToPP</td>
        <td>43</td>
        <td>43</td>
        <td>50%</td>
        <td className="goalsColumn">240</td>
        <td className="goalsColumn">387</td>
        <td className="goalsColumn">402</td>
        <td className="goalsColumn">62%</td>
        <td>923</td>
    </tr>
    <tr className="playerRow">
        <td>6</td>
        <td>rybak</td>
        <td>6</td>
        <td>15</td>
        <td>28.57%</td>
        <td className="goalsColumn">37</td>
        <td className="goalsColumn">77</td>
        <td className="goalsColumn">135</td>
        <td className="goalsColumn">48.1%</td>
        <td>882.1</td>
    </tr>
    <tr className="playerRow">
        <td>7</td>
        <td>Amman</td>
        <td>36</td>
        <td>48</td>
        <td>42.86%</td>
        <td className="goalsColumn">144</td>
        <td className="goalsColumn">345</td>
        <td className="goalsColumn">433</td>
        <td className="goalsColumn">41.7%</td>
        <td>805.9</td>
    </tr>
    <tr className="playerRow">
        <td>8</td>
        <td>Bartik</td>
        <td>12</td>
        <td>16</td>
        <td>42.86%</td>
        <td className="goalsColumn">52</td>
        <td className="goalsColumn">123</td>
        <td className="goalsColumn">134</td>
        <td className="goalsColumn">42.3%</td>
        <td>790.8</td>
    </tr>
    </tbody>
</table>
<div id='past-highchart-container'></div>
        </div>
    )
}

export default PastData3rd;
