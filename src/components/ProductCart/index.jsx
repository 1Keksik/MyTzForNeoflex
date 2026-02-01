import './style.css'

const ProductCart = ({ product, decrease, deleteToProduct, increase }) => {

    const { img, title, newPrise, count, priceTotal, id } = product;

    const formattedPrice = (price) => {
        let formatted = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
        return formatted;
    };

    return (
        <div className='cartProduct-block'>
            <div className='cartProduct-block__imgAndCountController'>
                <div className="cartProduct-block__imgСontainer">
                    <img src={`./img/product/${img}`} alt="/" />
                </div>
                <div className='cartProduct-block__countController'>
                    <button onClick={() => decrease(id)} className='cartProduct-block__buttonControl'>
                        <img src='./img/ico/minus.svg' alt="/" />
                    </button>
                    <span className='cartProduct-block__kolvo'>{count}</span>
                    <button onClick={() => increase(id)} className='cartProduct-block__buttonControl'>
                        <img src='./img/ico/plus.svg' alt="/" />
                    </button>
                </div>
            </div>
            <div className='cartProduct-block__titleAndPrice'>
                <h3 className='cartProduct-block__title'>
                    {title}
                </h3>
                <span className='cartProduct-block__prise'>
                    {formattedPrice(newPrise)}
                </span>
                <button onClick={() => deleteToProduct(id)} className='cartProduct-block__remove'>
                    <img src='./img/ico/remove.svg' alt="/" />
                </button>
                <div className='cartProduct-block__allPrice'>
                    {formattedPrice(priceTotal)}
                </div>
            </div>
        </div>);
}

export default ProductCart;