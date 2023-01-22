import Head from 'next/head'

import Navbar from '../components/Navbar'
import Headline from '../components/Landing/Headline'
import Products from '../components/Landing/Products'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Nike Remake</title>
                <meta name="description" content="Made using Next & Medusa!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <div style={{height: '60px'}}></div>
            <Headline />
            <Products />
        </div>
    )
}
