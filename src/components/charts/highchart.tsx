import React, { useEffect, useState } from 'react';
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
const [seriesOptions, setSeriesOptions] = useState([{
    type: 'line', name: "d", data: [[
        [1597850460000, 823.821],
        [1597864520000, 828.457]
    ]]
}, {
    type: 'line', name: "y", data: [
        [1597850460000, 825.821],
        [1597884520000, 829.457]
    ]
},
]);
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

const options: Highcharts.Options = {
    title: {
        text: 'Rating over time'
    },
    chart: {
        zoomType: 'x'
    },
    xAxis: {
        labels: {
            formatter: function() {
                return moment(this.value).toString();
            }
        },
        min: 1597840460000
    },
    series: seriesOptions
}

export const Highchart = (props: HighchartsReact.Props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                BackendURL + "/getPlayersSnapshots",
            );
            let processedData = processData(result.data)
            setSeriesOptions(processedData)
            console.log(processedData);
            console.log(seriesOptions);
            setIsLoaded(true);

        };

        fetchData();
    }, []);
    if (isLoaded) {
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    chartData={seriesOptions}
                    {...props}
                />
            </div>
        )
    } else {
        return (
        <div>
            
        </div>
        )
    }
}

export default Highchart;