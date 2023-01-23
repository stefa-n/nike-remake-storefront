import Image from 'next/image'
import Link from "next/link";
import {useEffect, useState} from 'react';

export default function Navbar() {
    const [getCartLength, setCartLength] = useState(0)

    useEffect(() => {
        let id = localStorage.getItem("cart_id");

        if (id) {
            fetch(`http://localhost:9000/store/carts/${id}`, {
                credentials: "include",
            })
                .then((response) => response.json())
                .then(({cart}) => setCartLength(cart.items.length))
                .catch(() => {
                    fetch(`http://localhost:9000/store/carts`, {
                        method: "POST",
                        credentials: "include",
                    })
                        .then((response) => response.json())
                        .then(({cart}) => {
                            if (!cart)
                            localStorage.setItem("cart_id", cart.id);
                            setCartLength(cart.items.length);
                        })
                })
        }
        if (!id) {
            fetch(`http://localhost:9000/store/carts`, {
                method: "POST",
                credentials: "include",
            })
                .then((response) => response.json())
                .then(({cart}) => {
                    if (!cart)
                    localStorage.setItem("cart_id", cart.id);
                    setCartLength(cart.items.length);
                })
        }
    })

    useEffect(() => {
        let prevScrollpos = window.scrollY;
        window.onscroll = function () {
            let currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos || 170 > currentScrollPos) {
                window.document.getElementById('navbar').style.top = "0";
            } else {
                window.document.getElementById('navbar').style.top = "-60px";
            }
            prevScrollpos = currentScrollPos;
        };
    }, []);
    return (
        <div id='navbar' style={{
            display: 'flex',
            width: '100%',
            height: '60px',
            background: 'white',
            position: 'fixed',
            top: '0px',
            transition: 'top 0.3s'
        }}>
            <Link style={{position: 'absolute', left: '2.5rem'}} href='/'>
                <Image src='/logo.png' width={60} height={60} alt='Store logo'/>
            </Link>
            <Link href='/cart' style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                right: '2.5rem',
                height: '60px'
            }}>
                <p>{getCartLength}</p>
                <Image src='/navbar/cart.svg' width={36} height={36} alt='Cart'/>
            </Link>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '60px'
            }}>
                <Link href='/' style={{fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>Products</Link>
                <Link href='/' style={{fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>Shoes</Link>
                <Link href='/' style={{fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>Sale</Link>
            </div>
        </div>
    )
}
