import { useState } from 'react';
import './style.css'

const Footer = () => {

    const [selectedLang, setSelectedLang] = useState('ru');

    const languages = [
        { code: 'kaz', label: 'Каз' },
        { code: 'ru', label: 'Рус' },
        { code: 'en', label: 'Eng' },
    ];

    return (
        <footer>
            <span className='header__logo'>qpick</span>
            <ul className='col1'>
                <li>Избранное</li>
                <li>Корзина</li>
                <li>Контакты</li>
            </ul>
            <ul className='col2'>
                <li>Условия сервиса</li>
                <li className='lang'>
                    <img src='./img/ico/language.svg' alt="/" width="20" height="20" />
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`lang-btn ${selectedLang === lang.code ? 'selected' : ''
                                }`}
                            onClick={() => setSelectedLang(lang.code)}>
                            {lang.label}
                        </button>
                    ))}
                </li>
            </ul>

            <ul className="social">
                <li><img src='./img/ico/VK.svg' alt='/' width="30" height="20" /></li>
                <li><img src='./img/ico/Telegram.svg' alt='/' width="30" height="30" /></li>
                <li><img src='./img/ico/Whatsapp.svg' alt='/' width="30" height="30" /></li>
            </ul>
        </footer>
    );
}

export default Footer;