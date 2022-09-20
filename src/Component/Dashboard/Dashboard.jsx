import React, { useState } from 'react';
import "antd/dist/antd.css";
import vactor from '../../images/Vector.png';
import vactor1 from '../../images/Vector (1).png';
import { Layout, Menu, Input, Avatar, Badge, Select, Alert } from 'antd';
import { SearchOutlined, AlignRightOutlined } from '@ant-design/icons';
import { BsFillBellFill } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';
import { BsMenuButton } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { Col, Row } from 'antd';
import "../../index.css";
import SalesChart from '../BusinessChart.jsx/SalesChart';

const { Header, Content, Sider } = Layout;
const { Option } = Select;

function getItem(icon, label, key, children, type) {
    return {
        key,
        icon,
        label,
        children,
        type
    };
}
const items = [

    getItem('icon1', 'Menu', 'g1', [getItem(<AlignRightOutlined style={{ transform: "rotate(90deg)" }} />, 'Dashboard', '1'),
    getItem(<GrMapLocation />, 'Maps', '2'),
    getItem(<BsMenuButton />, 'Menu', '3')
    ], 'group'),
    getItem('icon2', 'Others', 'g2', [
        getItem(<AiTwotoneSetting />, 'Settings', '4'),
        getItem(<HiUser />, 'Accounts', '5'),
        getItem(<BsFillInfoSquareFill />, 'Help', '6'),
    ], 'group')
]

const suffix = (
    <SearchOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const Dashboard = () => {
    const [show, setShow] = useState(true);
    return (
        <Layout >
            <Row>
                <Header style={{
                    backgroundColor: '#FFFFFF',
                    height: '60px',
                    overflow: 'hidden',
                    position: 'fixed',
                    zIndex: 1,
                    display: 'flex',
                    width: '100%',
                    boxShadow: "0px 0.3px 0.9px rgba(0, 0, 0, 0.07), 0px 1.6px 3.6px rgba(0, 0, 0, 0.11)"
                }}>
                    <Col
                        span={2}
                        xs={{
                            order: 1,
                        }}
                        sm={{
                            order: 1,
                        }}
                        md={{
                            order: 3,
                        }}
                        lg={{
                            order: 1,
                        }}
                    >
                        <p style={{ fontWeight: 'bold' }}><span style={{ backgroundColor: 'blue', paddingLeft: 7, paddingRight: 7, borderRadius: '80%', color: 'white', marginRight: '10px' }}>L</span>LOOGO</p>
                    </Col>
                    <Col
                        span={4}
                        xs={{
                            order: 1,
                        }}
                        sm={{
                            order: 1,
                        }}
                        md={{
                            order: 4,
                        }}
                        lg={{
                            order: 1,
                        }}
                    >
                        <Input

                            placeholder="Search"
                            style={{
                                width: 365,
                                height: 35,
                                marginTop: 12,
                                marginLeft: 100
                            }}
                            allowClear
                            suffix={suffix}
                        />
                    </Col>
                    <Col
                        span={2}
                        xs={{
                            order: 1,
                        }}
                        sm={{
                            order: 1,
                        }}
                        md={{
                            order: 1,
                        }}
                        lg={{
                            order: 1,
                        }}
                    >
                        <div >
                            <Badge dot={show} >
                                <BsFillBellFill shape="square" size={20} />
                            </Badge>
                            <Avatar src="https://joeschmoe.io/api/v1/random" />
                            <Select
                                defaultValue="Admin"
                                bordered={false}
                            >
                                <Option value="Admin">Admin</Option>
                                <Option value="User">User</Option>
                            </Select>

                        </div>
                    </Col>

                </Header>
            </Row>
            <Layout>
                <Row>
                    <Col span={6} pull={18}>
                        <Sider width={200} style={{ backgroundColor: "#E1E1E1", marginTop: "20px" }}>
                            <Menu
                                defaultSelectedKeys={['1']}
                                mode="inline"
                                items={items}

                                style={{
                                    height: '100%',
                                    backgroundColor: "#E1E1E1",
                                    borderRight: 0,
                                    position: 'fixed',
                                    overflowX: 'hidden',
                                    width: "250px",
                                    top: "60px",
                                    padding: 10,
                                    left: "0px"
                                }}
                            />
                        </Sider>
                    </Col>

                    <Layout style={{backgroundColor: '#FFFFFF' }}>

                      
                            <Content>
                                <div style={{ padding: 70 }}>
                                <Col span={8} push={4}>
                                    <p style={{ fontSize: 20, fontWeight: 'bold' }}>Redgreen Sales</p>
                                    <img src={vactor} style={{
                                        position: 'absolute', zIndex: 3, marginLeft: 30,
                                        marginTop: 5, padding: 10, width: 60
                                    }} alt="" />
                                    <img src={vactor1} style={{
                                        position: 'absolute', zIndex: 3, marginLeft: 45,
                                        marginTop: 40, width: 30
                                    }} alt="" />
                                    <Alert
                                        message="Notification"
                                        description="You dont have enough stock for the next campaign."
                                        image="https://joeschmoe.io/api/v1/random"
                                        type="warning"
                                        closable
                                        style={{
                                            height: 80,
                                            width: 1030,
                                            color: '#9D8506',
                                            fonWeight: 400,
                                            fontSize: 16,
                                            paddingLeft: 100,
                                            position: 'relative',
                                            borderLeftColor: '#9D8506',
                                            borderLeftWidth: 4,
                                            marginBottom: 40
                                        }}
                                    />
                                      </Col>
                                    <Col span={8} push={3}>  
                                        <SalesChart />
                                    </Col>
                                </div>

                            </Content>
                      


                    </Layout>
                </Row>
            </Layout>
        </Layout>

    );
};

export default Dashboard;