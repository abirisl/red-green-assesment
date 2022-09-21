import { Card, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';

const PopularProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontSize: 24 }}>Most Popular Product</h1>
                <div>
                    <MoreOutlined style={{ fontSize: '22px' }} />
                </div>
            </div>
            {
                products.map(product =>
                <div style={{marginTop:20}}>
                        <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <div>
                        <h4 style={{
                            width: "45px",
                            marginRight: "8px",
                            padding: "8px 10px",
                            textAlign: "center",
                            borderRadius: "8px",
                            border: "1px solid #d5cfcf",
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '26px'
                        }}>{product.name}</h4>
                        </div>

                        <div style={{ marginRight:270 }}>
                            <h1 style={{
                                fontFamily: 'poppins',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '5px'
                            }}>{product.title}</h1>
                            {
                                product.profit < 0 ?
                                <p style={{color: "red"}}>{product.profit}% Increase</p>:
                                <p style={{color: "#747474"}}>{product.profit}% Increase</p>
                                
                            }
                        </div>

                        <p style={{color: "red"}}>{product.sales}</p>

                    </div>
                    <Divider style={{marginTop:0}}/>
                </div>

                )
            }
            <p style={{
                color: "#2D5BFF", fontWeight: 500,
                fontSize: '14px',
            }}>Show more</p>
        </Card>
    );
};

export default PopularProduct;