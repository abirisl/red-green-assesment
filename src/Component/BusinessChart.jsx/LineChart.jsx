import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { MoreOutlined } from '@ant-design/icons';

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
     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontSize: 24 }}>Total Sale</h1>
                <div>
                    <MoreOutlined style={{ fontSize: '22px' }} />
                </div>
            </div>
      <div style={{ display: 'flex', marginTop: 40 }}>
        <div>
          <p style={{
            fontFamily: 'poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '0px'
          }}>TV</p>
          <h3>600.000</h3>
          <p style={{
            fontFamily: 'poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            marginTop: 30,
            lineHeight: '0px'}}>Laptop</p>
          <h3>1.200.000</h3>
          <p style={{
            fontFamily: 'poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            marginTop: 30,
            lineHeight: '0px'}}>Other</p>
          <h3>210.287</h3>
        </div>
        <div style={{ paddingLeft: 50 }}>
          <ReactApexChart options={options2} series={series2} type="line" height={270} width={480} />
        </div>
      </div >
    </div >

  );
};

export default LineChart;