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
            <div className='headphones'>
                <p>Наушники</p>
                <div className='conteiner__product'>
                    {productsWired}
                </div>
                <p>Беспроводные наушники</p>
                <div className='conteiner__product'>
                    {productsWireless}
                </div>
            </div>
        </div>);
}

export default Home;