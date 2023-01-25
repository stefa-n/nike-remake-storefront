import Head from 'next/head';
import Router from 'next/router';
import {useEffect, useState} from 'react'

import Navbar from '../components/Navbar';
import Bag from '../components/Cart/Bag';
import Subtotal from '../components/Cart/Subtotal';

export default function Cart() {
    const [getCartCurrency, setCartCurrency] = useState('EUR')
    const [getCartSubtotal, setCartSubtotal] = useState('EUR')
    const [getCartItems, setCartItems] = useState([])

    useEffect(() => {
        const cart = localStorage.getItem('cart_id');
        if (cart) {
            fetch(`http://localhost:9000/store/carts/${cart}`, {
                credentials: "include",
            })
                .then((response) => response.json())
                .then(({cart}) => {
                    setCartSubtotal(cart.subtotal)
                    setCartCurrency(cart.region.currency_code)
                    setCartItems(cart.items);
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
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                <Bag items={getCartItems} currency={getCartCurrency}/>
                <Subtotal subtotal={getCartSubtotal}/>
            </div>
        </div>
    )
}
