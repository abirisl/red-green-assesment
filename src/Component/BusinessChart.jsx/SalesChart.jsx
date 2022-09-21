import React from 'react';
import { Card, Col, Divider, Row } from 'antd';
import LineChart from './LineChart';
import DonutChart from './DonutChart';

const SalesChart = () => {
    return (

        <div style={{display: 'flex',gap:10}}>
            <Card><LineChart /></Card>

            <Card> <DonutChart /></Card>

        </div>
    );
};

export default SalesChart;