import Router from 'next/router';

export default function AddToBag({cart, id}) {
    return (
        <div onClick={() => {
            fetch(`http://localhost:9000/store/carts/${cart}/line-items`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    variant_id: id,
                    quantity: 1,
                }),
            })
                .then(() => Router.push('/'))
        }}
             style={{
                 position: 'absolute',
                 bottom: '0',
                 display: 'flex',
                 justifyContent: 'center',
                 width: '100%',
                 minHeight: '60px',
                 background: 'black',
                 color: 'white',
                 borderRadius: '30px'
             }}>
            <p style={{margin: '1.3276rem'}}>Add to Bag</p>
        </div>
    )
}
