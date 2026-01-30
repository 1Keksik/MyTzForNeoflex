import { useEffect, useState } from 'react';

import './style.css'

import ProductCart from '../../components/ProductCart';


const Cart = ({ totalCount, setTotalCount }) => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        // sessionStorage.clear();
        const savedCart = sessionStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    const decrease = (id) => {
        const minusItem = (cartItems) => {
            return cartItems
                .map((product) => {
                    if (product.id === id) {
                        if (product.count === 1) {
                            return null;
                        }
                        return {
                            ...product,
                            count: product.count - 1,
                            priceTotal: product.priceTotal - product.newPrise
                        };
                    }
                    return product;
                })
                .filter(item => item !== null);
        };

        setTotalCount(totalCount - 1)
        sessionStorage.setItem('totalCount', JSON.stringify(totalCount - 1));

        setCartItems(minusItem(cartItems));
        sessionStorage.setItem('cart', JSON.stringify(minusItem(cartItems)));
    }

    const deleteToProduct = (id) => {

        const updatedCart = cartItems.filter((product) => id !== product.id);

        setCartItems(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));

        let k = cartItems.find((product) => id === product.id);

        setTotalCount(totalCount - k.count);
        sessionStorage.setItem('totalCount', JSON.stringify(totalCount - k.count));
    };

    const increase = (id) => {
        const plusItem = (cartItems) => {
            return cartItems.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count + 1,
                        priceTotal: product.priceTotal + product.newPrise,

                    }
                }
                return product
            })
        };

        setTotalCount(totalCount + 1)
        sessionStorage.setItem('totalCount', JSON.stringify(totalCount + 1));

        setCartItems(plusItem(cartItems));
        sessionStorage.setItem('cart', JSON.stringify(plusItem(cartItems)));

    }

    let priceAll = 0;

    const ItemCart = cartItems && cartItems.map((product) => {
        priceAll += product.priceTotal;
        return <ProductCart product={product} key={product.id} decrease={decrease} deleteToProduct={deleteToProduct} increase={increase} />
    })


    const formattedPrice = "₽ " + priceAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return (
        <div className='main'>
            <div className='shopping__cart'>
                <p>Корзина</p>
                <div className='cartProduct__result'>
                    <div className='cartProduct'>
                        {ItemCart}
                    </div>
                    <div className='result'>
                        <div className='itogo'>
                            <span className='itogo__text'>
                                итого
                            </span>
                            <span className='itogo__sum'>
                                {formattedPrice}
                            </span>
                        </div>
                        <button className='itogo__btn'>Перейти к оформлению</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;