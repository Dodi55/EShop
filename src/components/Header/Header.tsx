import { HeaderBottom } from './HeaderBottom/HeaderBottom';
import { HeaderMain } from './HeaderMain/HeaderMain';
import { HeaderMobileMenu } from './HeaderMobileMenu/HeaderMobileMenu';
import { HeaderTop } from './HeaderTop/HeaderTop';

export const Header = () => {
    return (
        <header>
            <HeaderTop />
            <HeaderMain />
            <HeaderBottom />
            <HeaderMobileMenu />
        </header>
    );
};

