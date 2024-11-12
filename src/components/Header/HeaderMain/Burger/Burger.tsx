import { RxDashboard } from 'react-icons/rx';
import styled from './Burger.module.sass'
import { BiChevronDown } from 'react-icons/bi';

export const Burger = () => {
    return (
        <button className={styled.headerBtn}>
            <RxDashboard className={styled.headerBurger}/>
            <p>Каталог</p>
            <BiChevronDown className={styled.headerArrow}/>
        </button>
    );
};

