import { FC } from 'react';
import styled from './NavItem.module.sass';

interface MyComponentProps {
    image: string;
    title: string;
}

export const NavItem: FC<MyComponentProps> = ({image, title}) => {
    return (
        <a href="#" className={styled.navItem}>
            <img width={24} src={image} />
            {title}
        </a>
    );
};

