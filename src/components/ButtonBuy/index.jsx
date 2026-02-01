import './style.css'

const ButtonBuy = ({ product, totalCount, setTotalCount }) => {

    const addToCart = (product) => {

        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            // Если товар уже есть — увеличиваем количество на 1
            existingItem.count += 1;
            existingItem.priceTotal += existingItem.newPrise;
        } else {
            // Если товара нет — добавляем его с количеством 1
            cart.push({
                id: product.id,
                img: product.img,
                title: product.title,
                newPrise: product.newPrise,
                priceTotal: product.newPrise,
                count: 1
            });
        }

        setTotalCount(totalCount + 1)
        sessionStorage.setItem('totalCount', JSON.stringify(totalCount + 1));
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <button onClick={() => addToCart(product)} className='product-block__buy'>Купить</button>
    );
}

export default ButtonBuy;
