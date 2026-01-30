import './style.css'

const ProductCart = ({ product, decrease, deleteToProduct, increase }) => {

    const { img, title, newPrise, count, priceTotal, id } = product;

    const formattedPrice = (price) => {
        let formatted = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
        return formatted;
    };

    return (
        <div className='cartProduct__item'>
            <div className='img__countController'>
                <div className="img__container">
                    <img src={`./img/product/${img}`} alt="/" />
                </div>
                <div className='item__countController'>
                    <button onClick={() => decrease(id)} className='buttonControl'>
                        <img src='./img/ico/minus.svg' alt="/" />
                    </button>
                    <span className='product__kolvo'>{count}</span>
                    <button onClick={() => increase(id)} className='buttonControl'>
                        <img src='./img/ico/plus.svg' alt="/" />
                    </button>
                </div>
            </div>
            <div className='title_price'>
                <h3 className='cartProduct__title'>
                    {title}
                </h3>
                <span className='cartProduct__prise'>
                    {formattedPrice(newPrise)}
                </span>
                <button onClick={() => deleteToProduct(id)} className='remove'>
                    <img src='./img/ico/remove.svg' alt="/" />
                </button>
                <div className='productAllPrice'>
                    {formattedPrice(priceTotal)}
                </div>
            </div>
        </div>);
}

export default ProductCart;