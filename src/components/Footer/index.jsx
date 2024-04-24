import React from 'react';

const Footer = () => {
    return (
        <div className='footer w-full flex flex-column mt-6 bg-black-alpha-80 justify-content-center p-4'>
            <img className='h-2rem px-8 text-100' src={"https://assets.pagseguro.com.br/ps-cart-assets/1.46.0/legacy/app/public/assets/images/logos/logo-pagbank-negative.svg"}/>
            <div className='text-300 text-xs'>
                <p className='flex justify-content-center'>© 1996-2024 Todos os direitos reservados.</p>
                <p className='flex justify-content-center'>PAGSEGURO INTERNET INSTITUIÇÃO DE PAGAMENTO S/A - CNPJ/MF 08.561.701/0001-01 - Av. Brigadeiro Faria Lima, 1.384, São Paulo - SP - CEP 01451-001</p>
            </div>
        </div>
    );
};

export default Footer;