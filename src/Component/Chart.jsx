import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Row, Col } from 'antd/lib/grid';
import { Card } from 'antd';

const Chart = () => {
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
    <Row style={{ margin: 30 }}>
      <Card>
        <Col flex={3} >
          <div>
            <h1>Total Sale</h1>
            <p>TV</p>
            <p>600.000</p>
            
          </div>
          <ReactApexChart options={options2} series={series2} type="line" height={350} width={550} />

        </Col>
      </Card>
      <Card style={{ marginLeft: 30 }}>
        <Col flex={2}>
          <h1 style={{ fontSize: 24 }}>Sales Chart</h1>
          <p style={{ fontSize: 18 }}>Todays Sale</p>
          <p>156</p>
          <ReactApexChart options={options} series={series} type="donut" width={400} />
        </Col>
      </Card>

    </Row>
  );
};

export default Chart;