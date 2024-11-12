import { NavLink } from 'react-router-dom';
import styled from './Logo.module.sass';

export const Logo = () => {
    return (
        <div className={styled.headerLogo}>
            <NavLink to="/">
                <img src="https://maxmobiles.ru/images/logos/73/logo__.svg" alt="" width={194}/>
            </NavLink>
        </div>
    );
};

