import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
    const series = [78, 40, 40]

    const options = {
        chart: {
            width: 380,
            type: 'donut',
        },
        labels: ["50% tv", "25% laptop", "25% other"],
        colors: ['#2D5BFF', '#6284FD', '#96ADFF'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
    };
    return (
        <div>
            <ReactApexChart options={options} series={series} type="donut" width={400} />
        </div>
    );
};

export default DonutChart;