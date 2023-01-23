import Image from 'next/image'

export default function Gallery({gallery}) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(444px, 1fr))',
            justifyContent: 'center',
            width: '50vw'
        }}>
            {
                gallery.map((product) => {
                    return <Image src={product.url} key={product.url} alt='Preview Image' width={4000} height={4000}
                                  style={{width: 'auto', height: '542px'}}/>
                })
            }
        </div>
    )
}