import './style.css'

import ProductHome from '../../components/ProductHome';

import headphones from '../../data'


const Home = ({ totalCount, setTotalCount }) => {

    const productsWired = headphones && headphones
        .filter(headphones => headphones.type === 'wired')
        .map((product) => {
            return <ProductHome product={product} key={product.id} totalCount={totalCount} setTotalCount={setTotalCount} />
        })
    const productsWireless = headphones && headphones
        .filter(headphones => headphones.type === 'wireless')
        .map((product) => {
            return <ProductHome product={product} key={product.id} totalCount={totalCount} setTotalCount={setTotalCount} />
        })

    return (
        <div className='main'>
            <div className='home-products'>
                <p>Наушники</p>
                <div className='home-products__conteiner'>
                    {productsWired}
                </div>
                <p>Беспроводные наушники</p>
                <div className='home-products__conteiner'>
                    {productsWireless}
                </div>
            </div>
        </div>);
}

export default Home;