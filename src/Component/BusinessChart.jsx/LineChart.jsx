import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {

  const series2 = [{
    name: 'TV',
    data: [0, 10, 20, 30, 35]
  }, {
    name: 'Laptop',
    data: [0, 10, 20, 30, 35]
  }, {
    name: 'Other',
    data: [0, 10, 20, 30, 35]
  }];
  const options2 = {
    chart: {
      height: 200,
      type: 'line'
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },

    xaxis: {
      categories: [0, 7, 14, 21, 28
      ],
    },
  }


  return (
    
          <div>
            <ReactApexChart options={options2} series={series2} type="line" height={350} width={550} />
          </div>

  );
};

export default LineChart;