import Image from 'next/image'

export default function Bag({items, currency}) {
    return (
        <div style={{width: '45%'}}>
            <p style={{fontSize: '22px'}}>Bag</p>
            {
                items.map((item) => {
                    return (
                        <div key={item.id} style={{display: 'flex', paddingBottom: '24px', width: '95%'}}>
                            <Image alt={`Image of ${item.title}`} src={item.thumbnail} width={256} height={256}
                                   style={{width: 'auto', height: '150px'}}/>
                            <div style={{paddingLeft: '16px', width: '100%'}}>
                                <p style={{fontSize: '16px', display: 'inline-block'}}>{item.title}</p>
                                <p style={{
                                    display: 'inline-block',
                                    float: 'right'
                                }}>{currency.toUpperCase()} {item.unit_price / 100}</p>
                                <p style={{color: 'rgb(117, 117, 117)'}}>{item.variant.product.description}</p>
                                <p style={{color: 'rgb(117, 117, 117)'}}>{item.description}</p>
                                <div style={{width: '100%', height: '0.1rem', backgroundColor: '#E5E5E5'}}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}