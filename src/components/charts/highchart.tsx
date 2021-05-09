import React, { useEffect } from 'react';
import * as Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import { BackendURL } from '../../constants'
import moment from 'moment';
import loader from '../../assets/img/loader.gif';


interface PlayerSnapshot {
    player: {
        name: string,
        rating: number
    }
    teamSnapshot: {
        calculatedMatch: {
            time: string
        }
    }
    rating: number
}


const processData = (snapshots: PlayerSnapshot[]) => {
    let processedData: any = {}
    snapshots.forEach((value) => {
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


    return returnData;
}

export const Highchart = (props: HighchartsReact.Props) => {
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                BackendURL + "/player/snapshot/filtered",
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
                    min: 1588726772000,
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
                <img src={loader} />
            </div>
        )
}

export default Highchart;