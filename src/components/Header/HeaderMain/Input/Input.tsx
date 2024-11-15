import styled from './Input.module.sass';

export const Input = () => {
    return (
        <div className={styled.headerForm}>
            <form action="">
                <input type="text" />
                <button className={styled.headerFormBtn}>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.828 4.75a6.078 6.078 0 100 12.156 6.078 6.078 0 000-12.156zM3.25 10.828a7.578 7.578 0 1113.441 4.801l4.161 4.162a.75.75 0 11-1.06 1.06l-4.162-4.16a7.578 7.578 0 01-12.38-5.862z" fill="#363636"></path></svg>
                </button>
            </form>
        </div>
    );
};
