import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { MoreOutlined } from '@ant-design/icons';

const DonutChart = () => {
    const series = [78, 40, 40]

    const options = {
        chart: {
            width: 350,
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontSize: 24 }}>Sales Chart</h1>
                <div>
                    <MoreOutlined style={{ fontSize: '22px' }} />
                </div>
            </div>
            <div>
                <p style={{
                    fontFamily: 'poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    marginTop: 15,
                    lineHeight: '0px'
                }}>Todays Sale</p>
                <h4 style={{ fontSize: 24 }}>156</h4>
            </div>
            <ReactApexChart options={options} series={series} type="donut" width={350} />
        </div>
    );
};

export default DonutChart;