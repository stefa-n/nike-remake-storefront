import Link from "next/link";
import {useEffect, useState} from "react";

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:9000/store/products?limit=3")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, []);
    return (
        <div style={{marginLeft: '3rem'}}>
            <div>
                <p style={{fontSize: '24px'}}>Newest Arrivals</p>
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center'
            }}>
                {products.map((product) => (
                    <Link key={product.id} href={`/product?id=${product.id}`} style={{width: '598px'}}>
                        <div key={product.id} style={{
                            width: '100%',
                            height: 'calc(0.389 * 100vw)',
                            backgroundImage: `url(${product.thumbnail}`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat'
                        }}/>
                        <p style={{display: 'inline-block', marginBottom: '0'}}>{product.title}</p>
                        <p style={{
                            display: 'inline-block',
                            float: 'right'
                        }}>{product.variants[0].prices[0].currency_code.toUpperCase()} {product.variants[0].prices[0].amount / 100}</p>
                        <p style={{marginTop: '0', width: '80%', color: '#757575'}}>{product.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}