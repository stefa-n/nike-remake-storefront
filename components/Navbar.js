import Image from 'next/image'
import Link from "next/link";
import {useEffect} from 'react';

export default function Navbar() {
    useEffect(() => {
        let prevScrollpos = window.scrollY;
        window.onscroll = function () {
            let currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
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
            <Link href='/' style={{paddingLeft: '2.5rem'}}>
                <Image src='/logo.png' width={60} height={60} alt='Store logo' style={{alignItems: 'center'}}/>
            </Link>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '60px'
            }}>
                <Link href='/' style={{fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>New & Featured</Link>
                <Link href='/' style={{fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>Men</Link>
                <Link href='/' style={{fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>Women</Link>
                <Link href='/' style={{fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>Kids</Link>
                <Link href='/' style={{fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>Sale</Link>
            </div>
        </div>
    )
}
