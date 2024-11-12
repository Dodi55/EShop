import { FaPhoneAlt } from 'react-icons/fa';
import styled from './Phone.module.sass';

export const Phone = () => {
    return (
        <>
            <div className={styled.headerPhone}>
                <FaPhoneAlt style={{fontSize: '20px'}}/>
                <a href="tel:+79780445478">8 (800) 250-81-58</a>
            </div>
        </>
    );
};

