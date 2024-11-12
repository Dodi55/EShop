import styled from './HeaderTop.module.sass';


export const HeaderTop = () => {
    return (
        <div className={styled.headerTop}>
            <div className='container'>
                <div className={styled.flexbox}>
                    <nav className={styled.navbar}>
                        <a href="#">Акции и скидки</a>
                        <a href="#">О нас</a>
                        <a href="#">Контакты</a>
                        <a href="#">Доставка и оплата</a>
                        <a href="#">Кредит</a>
                        <a href="#">Трейд-Ин</a>
                        <a href="#">Отзывы</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

