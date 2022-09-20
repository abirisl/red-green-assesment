import React from 'react';
import { Card, Col, Divider, Row } from 'antd';
import LineChart from './LineChart';
import DonutChart from './DonutChart';

const SalesChart = () => {
    return (
      <Row>
        <Col span={6} push={3}>
        <Card style={{width:600}}><LineChart/></Card>
        </Col>

        <Col span={4} push={22}>
       <Card style={{marginLeft:200, width:410, height:410}}> <DonutChart/></Card>
        </Col>
      </Row>
    );
};

export default SalesChart;