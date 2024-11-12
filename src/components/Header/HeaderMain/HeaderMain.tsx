import { Burger } from './Burger/Burger';
import styled from './HeaderMain.module.sass';
import { Input } from './Input/Input';
import { Favorits } from './Favorits/Favorits';
import { Phone } from './Phone/Phone';
import { Logo } from './Logo/Logo';

export const HeaderMain = () => {
    return (
        <div className={styled.headerMain}>
            <div className='container'>
                <div className={styled.flexbox}>
                    <Logo />
                    <Burger />
                    <Input />
                    <Phone />
                    <Favorits />
                </div>
            </div>
        </div>
    );
};

