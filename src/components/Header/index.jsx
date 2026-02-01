import { NavLink } from 'react-router-dom'

import './style.css'

const Header = ({ totalCount }) => {
    return (
        <header className='header-content'>
            <NavLink to='/'>
                <span className='logo'>
                    qpick
                </span>
            </NavLink>
            <div className='header-content__icons'>
                <button className='header-content__ico'>
                    <img src='./img/ico/likes.svg' alt="/" width="22" height="20" />
                    <div className="header-content__icoCounter">0</div>
                </button>
                <NavLink to='/cart'>
                    <button className='header-content__ico'>
                        <img src='./img/ico/shoppingСart.svg' alt="/" width="23" height="23" />
                        <div className="header-content__icoCounter">{totalCount}</div>
                    </button>
                </NavLink>
            </div>
        </header >
    );
}

export default Header;
