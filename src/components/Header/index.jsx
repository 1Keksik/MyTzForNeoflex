import { NavLink } from 'react-router-dom'

import './style.css'

const Header = ({ totalCount }) => {
    return (
        <header>
            <NavLink to='/'>
                <span className='header__logo'>
                    qpick
                </span>
            </NavLink>
            <div className='header__icons'>
                <button className='ico'>
                    <img src='./img/ico/likes.svg' alt="/" width="22" height="20" />
                    <div className="cart__counter">0</div>
                </button>
                <NavLink to='/cart'>
                    <button className='ico'>
                        <img src='./img/ico/shoppingСart.svg' alt="/" width="23" height="23" />
                        <div className="cart__counter">{totalCount}</div>
                    </button>
                </NavLink>
            </div>
        </header >
    );
}

export default Header;
