import Image from 'next/image'

export default function Bag({items, currency}) {
    return (
        <div>
            <p style={{fontSize: '22px'}}>Bag</p>
            {
                items.map((item) => {
                    return (
                        <div key={item.id} style={{display: 'flex', paddingBottom: '24px', width: '733px'}}>
                            <Image src={item.thumbnail} width={256} height={256}
                                   style={{width: 'auto', height: '150px'}}/>
                            <div style={{paddingLeft: '16px'}}>
                                <p style={{fontSize: '16px'}}>{item.title} - {currency.toUpperCase()} {item.unit_price / 100}</p>
                                <p style={{color: 'rgb(117, 117, 117)'}}>{item.variant.product.description}</p>
                                <p style={{color: 'rgb(117, 117, 117)'}}>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}