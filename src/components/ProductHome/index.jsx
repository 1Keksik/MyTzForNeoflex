import './style.css'

import ButtonBuy from '../ButtonBuy';

const ProductHome = ({ product, totalCount, setTotalCount }) => {

    const { img, title, newPrise, oldPrise, rating } = product;

    return (
        <div className='product-block'>
            <img src={`./img/product/${img}`} alt="/" className='product-block__img' />
            <div className='product-block__content'>
                <span className='product-block__title'>
                    {title}
                </span>
                <span className='product-block__priceNew'>
                    {newPrise} ₽
                </span>

                {product.oldPrise ?
                    <span className='product-block__priceOld'>
                        {oldPrise} ₽
                    </span>
                    : ''}
                <span className='product-block__rating'>
                    <img src='./img/ico/star.svg' alt="/" />
                    {rating}
                </span>
                <ButtonBuy product={product} totalCount={totalCount} setTotalCount={setTotalCount} />
            </div>
        </div>
    );
}

export default ProductHome;