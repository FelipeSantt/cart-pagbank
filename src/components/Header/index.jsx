import React from 'react';

const Header = () => {
    return (
        <header className='flex w-full h-3rem align-items-center px-8 border-bottom-1 border-green-500 ' >
            <div className='logo'>
                <img className='w-6 px-8' src={"https://logodownload.org/wp-content/uploads/2019/09/pagbank-logo-4-1.png"}/>
            </div>
        </header>
    );
};

export default Header;