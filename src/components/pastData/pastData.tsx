import React, {useEffect } from 'react';
import moment from 'moment';
import * as Highcharts from 'highcharts/highstock';
import { FirstSeasonData } from './1stSeasonData'


export const PastData = () => {
    let processedData: any = {}
    FirstSeasonData.forEach((value: any) => {
        if (!(value.PlayerName in processedData)) {
            processedData[value.PlayerName] = []
        }
        processedData[value.PlayerName].push([
            moment(value.MatchRef.Time).valueOf(),
            value.Rating,
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
            min: 1588726772000,
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
                        <td>365</td>
                        <td>184</td>
                        <td>66.48%</td>
                        <td className="goalsColumn">906</td>
                        <td className="goalsColumn">2939</td>
                        <td className="goalsColumn">1775</td>
                        <td className="goalsColumn">30.8%</td>
                        <td>1862.9</td>
                    </tr>
                    <tr className="playerRow">
                        <td>2</td>
                        <td>hubigz</td>
                        <td>135</td>
                        <td>140</td>
                        <td>49.09%</td>
                        <td className="goalsColumn">412</td>
                        <td className="goalsColumn">1115</td>
                        <td className="goalsColumn">1117</td>
                        <td className="goalsColumn">37%</td>
                        <td>1317.1</td>
                    </tr>
                    <tr className="playerRow">
                        <td>3</td>
                        <td>Nelson Mandela</td>
                        <td>135</td>
                        <td>135</td>
                        <td>50%</td>
                        <td className="goalsColumn">633</td>
                        <td className="goalsColumn">1132</td>
                        <td className="goalsColumn">1201</td>
                        <td className="goalsColumn">55.9%</td>
                        <td>1295.9</td>
                    </tr>
                    <tr className="playerRow">
                        <td>4</td>
                        <td>K-rol</td>
                        <td>171</td>
                        <td>173</td>
                        <td>49.71%</td>
                        <td className="goalsColumn">1013</td>
                        <td className="goalsColumn">1634</td>
                        <td className="goalsColumn">1605</td>
                        <td className="goalsColumn">62%</td>
                        <td>1231.6</td>
                    </tr>
                    <tr className="playerRow">
                        <td>5</td>
                        <td>Amman</td>
                        <td>151</td>
                        <td>204</td>
                        <td>42.54%</td>
                        <td className="goalsColumn">737</td>
                        <td className="goalsColumn">1425</td>
                        <td className="goalsColumn">1699</td>
                        <td className="goalsColumn">51.7%</td>
                        <td>963.4</td>
                    </tr>
                    <tr className="playerRow">
                        <td>6</td>
                        <td>ToPP</td>
                        <td>177</td>
                        <td>236</td>
                        <td>42.86%</td>
                        <td className="goalsColumn">844</td>
                        <td className="goalsColumn">1680</td>
                        <td className="goalsColumn">1985</td>
                        <td className="goalsColumn">50.2%</td>
                        <td>870.4</td>
                    </tr>
                    <tr className="playerRow">
                        <td>7</td>
                        <td>adamaru</td>
                        <td>68</td>
                        <td>101</td>
                        <td>40.24%</td>
                        <td className="goalsColumn">172</td>
                        <td className="goalsColumn">627</td>
                        <td className="goalsColumn">837</td>
                        <td className="goalsColumn">27.4%</td>
                        <td>622</td>
                    </tr>
                    <tr className="playerRow">
                        <td>8</td>
                        <td>rybak</td>
                        <td>74</td>
                        <td>86</td>
                        <td>46.25%</td>
                        <td className="goalsColumn">338</td>
                        <td className="goalsColumn">612</td>
                        <td className="goalsColumn">698</td>
                        <td className="goalsColumn">55.2%</td>
                        <td>559.2</td>
                    </tr>
                </tbody>
            </table>
            <div id='past-highchart-container'></div>
        </div>
    )
}

export default PastData;
