import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect, useState} from "react";

import Navbar from '../components/Navbar';
import Gallery from '../components/Product/Gallery';
import AddToBag from '../components/Product/AddToBag';

export default function Product() {
    const router = useRouter()
    const [getProdTitle, setProdTitle] = useState('Placeholder')
    const [getProdDescription, setProdDescription] = useState('Placeholder')
    const [getProdVariant, setProdVariant] = useState(null)
    const [getProdPrice, setProdPrice] = useState('Placeholder')
    const [getProdPriceCurrency, setProdPriceCurrency] = useState('Placeholder')
    const [getProdGallery, setProdGallery] = useState([])
    const [getCartId, setCartId] = useState(null)

    useEffect(() => {
        setCartId(localStorage.getItem('cart_id'))
        if (router.query.prod) {
            fetch(`http://localhost:9000/store/products/${router.query.prod}`, {
                credentials: "include",
            })
                .then((response) => response.json())
                .then((obj) => {
                    if (!obj.product) router.push('/')

                    setProdTitle(obj.product.title.toString());
                    setProdDescription(obj.product.description);
                    setProdVariant(obj.product.variants[0].id);
                    setProdPrice(obj.product.variants[0].prices[0].amount);
                    setProdPriceCurrency(obj.product.variants[0].prices[0].currency_code);
                    setProdGallery(obj.product.images)
                })
        }
    }, [])
    return (
        <div>
            <Head>
                <title>Nike Remake - {getProdTitle}</title>
                <meta name="description" content="Made using Next & Medusa!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <div style={{height: '100px'}}/>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Gallery gallery={getProdGallery}/>
                <div style={{marginLeft: '48px', position: 'relative'}}>
                    <p style={{fontSize: '28px', marginBottom: '0px'}}>{getProdTitle}</p>
                    <p style={{fontSize: '16px', marginTop: '0px', width: '456px'}}>{getProdDescription}</p>
                    <p>{getProdPriceCurrency.toUpperCase()} {getProdPrice / 100}</p>
                    <AddToBag cart={getCartId} id={getProdVariant}/>
                </div>
            </div>
        </div>
    )
}