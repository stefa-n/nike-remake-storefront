import Image from 'next/image'

export default function Headline() {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                height: '208px'
            }}>
                <p style={{
                    marginBottom: '0'
                }}>Inspired By A Popular Shoe Store</p>
                <h1 style={{
                    fontFamily: 'font-family: Futura,Trebuchet MS,Arial,sans-serif;',
                    fontWeight: '800',
                    fontSize: '72px',
                    margin: '0',
                    letterSpacing: '-6px',
                    textTransform: 'uppercase'
                }}>Do you like it?</h1>
                <p style={{
                    fontSize: '24px'
                }}>This is a store that you&apos;ll like. This is the store that sells the best shoes. This
                    is <b>THE</b> store.</p>
            </div>
            <Image src='/headline/banner.png' width={1920} height={1080} alt='Banner image' style={{width: '100%', height: 'auto'}}/>
        </div>
    )
}