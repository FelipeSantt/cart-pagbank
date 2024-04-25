import React from 'react';
import styled from 'styled-components';
import breakpoints from '../styles/breakPoints';

const HeaderPag = styled.div `
    @media ${breakpoints.bg} {
        img {
           margin-left:0;
        }
    }

`

const Header = () => {
    return (
        <HeaderPag>
            <header className='flex w-full h-3rem align-items-center px-8 border-bottom-1 border-green-500 ' >
                <div className='logo'>
                    <img className= 'ml-5' src={"https://assets.pagseguro.com.br/ps-bootstrap/v6.90.17/svg/pagbank/logo-pagbank.svg"}/>
                </div>
            </header>
        </HeaderPag>
    );
};

export default Header;