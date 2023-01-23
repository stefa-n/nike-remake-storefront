import Head from 'next/head';
import Router from 'next/router';
import {useEffect, useState} from 'react'

import Navbar from '../components/Navbar';
import Bag from '../components/Cart/Bag';

export default function Home() {
    const [getCartCurrency, setCartCurrency] = useState('EUR')
    const [getCartItems, setCartItems] = useState([])

    useEffect(() => {
        const cart = localStorage.getItem('cart_id');
        if (cart) {
            fetch(`http://localhost:9000/store/carts/${cart}`, {
                credentials: "include",
            })
                .then((response) => response.json())
                .then(({cart}) => {
                    setCartItems(cart.items);
                    setCartCurrency(cart.region.currency_code)
                })
                .catch(() => {
                    Router.push('/')
                })
        }
    })
    return (
        <div>
            <Head>
                <title>Nike Remake - Cart</title>
                <meta name="description" content="Made using Next & Medusa!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <div style={{height: '100px'}}/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Bag items={getCartItems} currency={getCartCurrency}/>
            </div>
        </div>
    )
}
