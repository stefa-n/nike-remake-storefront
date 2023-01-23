import Head from 'next/head';

import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Headline from '../components/Landing/Headline';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Nike Remake</title>
                <meta name="description" content="Made using Next & Medusa!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <div style={{height: '60px'}}/>
            <Headline/>
            <Products/>
        </div>
    )
}
