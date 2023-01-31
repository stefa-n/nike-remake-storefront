import Router from 'next/router';
export default function Subtotal({subtotal}) {
    return (
        <div style={{width: '17vw', height: '295px', minWidth: '250px'}}>
            <p style={{fontSize: '22px'}}>Summary</p>
            <div>
                <p style={{display: 'inline-block'}}>Subtotal</p>
                <p style={{display: 'inline-block', float: 'right'}}>{subtotal / 100}</p>
            </div>
            <div style={{width: '100%', height: '0.1rem', backgroundColor: '#E5E5E5'}}/>
            <div onClick={() => {
                Router.push('/checkout')
            }}
                 style={{
                     display: 'flex',
                     justifyContent: 'center',
                     width: '100%',
                     minHeight: '60px',
                     marginTop: '1rem',
                     background: 'black',
                     color: 'white',
                     borderRadius: '30px'
                 }}>
                <p style={{margin: '1.3276rem'}}>Checkout</p>
            </div>
        </div>
    )
}