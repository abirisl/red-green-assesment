import React, { useEffect, useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Card, Divider } from 'antd';

const SaleProduct = () => {
    const [sales, setSells] = useState([]);

    useEffect(() => {
        fetch('sales.json')
            .then(res => res.json())
            .then(data => setSells(data))
    }, [])
    return (
        <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontSize: 24 }}>Sale</h1>
                <div>
                    <MoreOutlined style={{ fontSize: '22px' }} />
                </div>
            </div>

            <div>
                <p>Monthly Sales</p>
                <h4 style={{ fontSize: 24 }}>918</h4>
            </div>
            {
                sales.map(sale =>
                    <div style={{ marginTop: 20 }}>
                        <div style={{ display: "flex", justifyContent: 'space-between' }}>
                            <div>
                                <img style={{
                                    width: "45px",
                                    marginRight: "8px",

                                    textAlign: "center",
                                    borderRadius: "8px",
                                    border: "1px solid #d5cfcf",
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '20px',
                                    lineHeight: '26px'
                                }} src={sale.pic} alt='' />
                            </div>
                            <div style={{ marginRight: 200 }}>
                                <h1 style={{
                                    fontFamily: 'poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    lineHeight: '6px'
                                }}>{sale.product}</h1>
                                <p>{sale.seller}</p>
                            </div>
                            <p style={{
                                color: "#2D5BFF", fontWeight: 500,
                                fontSize: '14px'
                            }}>Details</p>

                        </div>
                        <Divider style={{ marginTop: 0 }} />
                    </div>
                )
            }
            <p style={{
                color: "#2D5BFF", fontWeight: 500,
                fontSize: '14px'
            }}>Show more</p>
        </Card>
    );
};

export default SaleProduct;