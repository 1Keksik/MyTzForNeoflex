import './style.css'

import ButtonBuy from '../ButtonBuy';

const ProductHome = ({ product, totalCount, setTotalCount }) => {

    const { img, title, newPrise, oldPrise, rating } = product;

    return (
        <div className='product__block'>
            <img src={`./img/product/${img}`} alt="/" className='product__img' />
            <div className='product__block__content'>
                <span className='title'>
                    {title}
                </span>
                <span className='price__new'>
                    {newPrise} ₽
                </span>

                {product.oldPrise ?
                    <span className='price__old'>
                        {oldPrise} ₽
                    </span>
                    : ''}
                <span className='rating'>
                    <img src='./img/ico/star.svg' alt="/" />
                    {rating}
                </span>
                <ButtonBuy product={product} totalCount={totalCount} setTotalCount={setTotalCount} />
            </div>
        </div>
    );
}

export default ProductHome;