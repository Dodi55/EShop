import styled from './HeaderBottom.module.sass';
import { NavItem } from './NavItem/NavItem';

export const HeaderBottom = () => {
    return (
        <div className={styled.headerBottom}>
            <div className='container'>
                <nav className={styled.navbar}>
                    <NavItem 
                    image='https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/8/bu_png.webp'
                    title='Идеальное БУ'
                    />
                    <NavItem 
                    image='https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/8/6_png.webp'
                    title='iPhone'
                    />
                    <NavItem 
                    image='https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/8/4_png.webp'
                    title='Watch'
                    />
                    <NavItem 
                    image='https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/8/10_png.webp'
                    title='Mac'
                    />
                    <NavItem 
                    image='https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/8/3_png.webp'
                    title='AirPods'
                    />
                    <NavItem 
                    image='https://maxmobiles.ru/images/ab__webp/abt__ut2/menu-with-icon/47/Game2_png.webp'
                    title='Всё для игр'
                    />
                </nav>
            </div>
        </div>
    );
};

