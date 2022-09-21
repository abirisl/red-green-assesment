import React, { useState } from 'react';
import "antd/dist/antd.css";
import vactor from '../../images/Vector.png';
import vactor1 from '../../images/Vector (1).png';
import { Layout, Menu, Input, Avatar, Badge, Select, Alert, Dropdown, Space } from 'antd';
import { SearchOutlined, AlignRightOutlined } from '@ant-design/icons';
import { BsFillBellFill } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';
import { BsMenuButton } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { Col, Row } from 'antd';
import "../../index.css";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import SalesChart from '../BusinessChart.jsx/SalesChart';
import PopularProduct from '../Product/PopularProduct';
import SaleProduct from '../Product/SaleProduct';
import Weather from '../Weather';

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

                <p style={{ fontWeight: 'bold' }}><span style={{ backgroundColor: 'blue', paddingLeft: 7, paddingRight: 7, borderRadius: '80%', color: 'white', marginRight: '10px' }}>L</span>LOOGO</p>


                <Input

                    placeholder="Search"
                    style={{
                        width: 365,
                        height: 35,
                        marginTop: 12,
                        marginLeft: 150
                    }}
                    allowClear
                    suffix={suffix}
                />

                <div style={{ marginLeft: 490 }}>
                    <Badge dot={show} style={{ marginTop: 32, marginRight: 5 }}>
                        <BsFillBellFill shape="square" size={20} dot={show} style={{ marginTop: 28 }} />
                    </Badge>
                    <Avatar style={{ marginBottom: 20, marginLeft: 8 }} src="https://joeschmoe.io/api/v1/random" />
                    <Select
                        defaultValue="Admin"
                        bordered={false}
                        style={{
                            width: 100,

                        }}

                    >
                        <Option value="Admin">Admin</Option>
                        <Option value="User">User</Option>
                    </Select>

                </div>

            </Header>
            <Layout>

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

                <Layout style={{ backgroundColor: '#FFFFFF' }}>


                    <Content>
                        <div style={{ padding: 25, marginTop:50, marginLeft:40 }}>

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
                                    width: 1060,
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

                            <div>
                                <SalesChart />
                            </div>
                          <Row style={{marginTop:12}}
                          gutter={{
                            xs: 8,
                            sm: 16,
                            md: 12,
                            lg: 12,
                          }}
                          >
                                <Col span={12}>
                                    <div>
                                        <PopularProduct />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <SaleProduct />
                                    </div>
                                    <div style={{marginTop:10}}>
                                        <Weather />
                                    </div>
                                </Col>
                            </Row>
                          </div>

                    </Content>



                </Layout>

            </Layout>
        </Layout>

    );
};

export default Dashboard;