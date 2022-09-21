import React from 'react';
import { Card, Col, Divider, Row } from 'antd';
import LineChart from './LineChart';
import DonutChart from './DonutChart';

const SalesChart = () => {
    return (
        <Row style={{ marginTop: 12 }}
            gutter={{

                lg: 12,
            }}
        >
            <Col span={15}>
                <Card><LineChart /></Card>

            </Col>
            <Col span={9}>
                <Card> <DonutChart /></Card>
            </Col>
        </Row>


    );
};

export default SalesChart;