import { Card } from 'antd';
import React from 'react';
import { LeftOutlined, RightOutlined, MoreOutlined } from '@ant-design/icons';
import vactor1 from '../images/Vector (2).png';
import vactor2 from '../images/Vector (3).png';
import vactor3 from '../images/Vector (4).png';

const Weather = () => {
    return (
        <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontSize: 24 }}>Weather</h1>
                <div>
                    <MoreOutlined style={{ fontSize: '22px' }} />
                </div>
            </div>
            <div style={{
                marginTop: "60px",
                display: "flex",
                justifyContent: "space-evenly",

            }}>
                <div
                    style={{
                        width: 200,
                        marginTop: "-35px",
                    }}>
                    <h2 style={{
                        fontWeight: "bold",
                        width: 500,
                        font: "30 px",
                        textAlign: "",
                        marginLeft: "10px",

                    }}>08:00 PM</h2>
                    <div style={{marginLeft:20}}>
                        <img style={{
                            width: "30px",
                            alignItems: "center",
                            position: 'absolute',
                            marginLeft: "20px",
                            marginTop: "10px",

                        }} src={vactor1} alt=""></img>
                        <img style={{
                            width: "50px",
                            position: 'absolute',
                            marginLeft: "10px",
                            top: 143

                        }} src={vactor2} alt=""></img>
                        <img style={{
                            width: "40px",
                            marginLeft: "35px",
                            marginTop: 20,
                            position: 'absolute',

                        }} src={vactor3} alt=""></img>
                    </div>
                    <p
                        style={{
                            fontWeight: "bold",
                            marginTop: "90px",
                            fontSize: "20px",

                        }}>Cloudy sunny 24'C</p>
                </div>
                <div style={{

                }}>
                    <p style={{
                        textAlign: "center",
                        fontWeight: "bold"
                    }}>Wed,21 september 2022
                        <LeftOutlined />
                        <RightOutlined /></p>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                    }}>

                        <div>
                            <p> 10:00 AM </p>
                            <p> 01:00 PM</p>
                            <p> 04:00 PM</p>
                            <p> 05:00 PM</p>
                            <p> 08:00 PM</p>
                        </div>

                        <div style={{
                            textAlign: "right",
                        }}>
                            <p>Light Rain, 27°C</p>
                            <p>Cloudy Sunny, 27°C</p>
                            <p>Cloudy, 27°C</p>
                            <p>Cloudy, 25°C</p>
                            <p>Light Rain, 26°C</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Weather;