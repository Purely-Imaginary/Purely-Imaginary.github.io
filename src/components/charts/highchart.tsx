import React, { useEffect } from 'react';
import * as Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import { BackendURL } from '../../constants'
import moment from 'moment';


interface PlayerSnapshot {
    MatchID: number,
    MatchRef: any,
    PlayerID: number,
    PlayerName: string,
    Rating: number
}


const processData = (snapshots: PlayerSnapshot[]) => {
    let processedData: any = {}
    snapshots.forEach((value) => {
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


    return returnData;
}

export const Highchart = (props: HighchartsReact.Props) => {
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                BackendURL + "/getPlayersSnapshots",
            );
            let chartData = processData(result.data)
            Highcharts.chart('highchart-container', {
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
                    itemHoverStyle:{
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
                        formatter: function() {
                            return moment(this.value).format('DD-MM-YYYY');
                        }
                    },
                    min: 1586268480000,
                    tickInterval: 7*24*60*60*1000
                },
                yAxis: {
                    gridLineColor: 'black'
                },
                series: chartData
            })


        };

        fetchData();
    }, []);
        return (
            <div id='highchart-container'>
                <h1>Loading charts...</h1>
            </div>
        )
}

export default Highchart;