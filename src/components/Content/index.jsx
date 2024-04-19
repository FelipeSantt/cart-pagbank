import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import 'primeicons/primeicons.css';
        
        


        
const header = (
    <img alt="Card" src="https://assets.pagseguro.com.br/ps-cart-assets/1.46.0/legacy/app/public/assets/images/products/768/d0211debd8a96744.png" />
);


const Content = () => {

    const [value,setValue] = useState(1);
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);

    const incrementNumber = () => {
        setValue((prevState) => prevState + 1);
    };

    const decrementNumber = () => {
        setValue((prevState) => prevState - 1);
    };

    return (
        <div className="container flex flex-column">
            <h1 className='w-full flex px-8 mt-8 ml-6 text-green-400 font-light'>Meu Carrinho</h1>
            <div className="card w-12 flex flex-column gap-4 align-items-center">
                <Card className='w-10 flex align-items-center'>
                    <div className="img flex align-items-start p-2 ml-7 gap-6">
                        <img alt='card' src='https://assets.pagseguro.com.br/ps-cart-assets/1.46.0/legacy/app/public/assets/images/products/768/d0211debd8a96744.png'/>
                        <img alt='card' src='https://assets.pagseguro.com.br/ps-cart-assets/1.46.0/legacy/app/public/assets/images/768/logo-d0211debd8a96744.png'/>
                        <div className="info w-3 ml-5 -mt-1 text-xs">
                            <h3 className='font-light text-base'>Operadora telefonica</h3>
                            <p className='font-light text-xs'>A maquininha será entregue com o chip da operadora com melhor sinal para sua região.</p>
                        </div>
                        <div className="quantidade -mt-1">
                            <h3 className='font-light text-base'>Quantidade</h3>
                            <div className="flex gap-2">
                                <Button style={{width:'40px',height:'40px', textAlign:'center'}}  icon="pi pi-minus" outlined onClick={decrementNumber}/>
                                <input className='border-round border-green-200' value={value} style={{width:'40px',height:'40px', textAlign:'center'}} onValueChange={(e) => setValue(e.value)}/>
                                <Button style={{width:'40px',height:'40px', textAlign:'center'}} icon="pi pi-plus" outlined onClick={incrementNumber}/>
                            </div>
                        </div>
                        <div className="pagamento w-2 text-xs">
                            <p>
                                <span>por 12X </span>
                                 R$<strong>24,90 </strong> <br/> <strong>sem juros no cartão de crédito</strong><br/> à vista por R$ 298,80
                            </p>
                            <a href="" className='flex justify-content-end text-sm'>Remover</a>
                        </div>
                    </div>
                </Card>
                <Card className='w-10 flex align-items-center'>
                    <div className="img flex align-items-start ml-7 gap-6">
                        <img className='w-6rem -ml-6' alt='card' src='https://assets.pagseguro.com.br/ps-cart-assets/1.46.0/legacy/app/public/assets/images/sem-duvida.png'/>
                        <div>
                            <h1 className='w-10rem text-lg -ml-5'>Plano Super Max</h1>
                            <a className='-ml-5 text-sm' href="">Saiba mais</a>
                        </div>
                        <div className="info w-25rem ml-6 -mt-1 text-base">
                            <h3 className='font-medium text-base'>Cashback</h3>
                            <p className='font-light text-sm'>Receba o valor da maquininha de volta ao faturar acima de R$ 3 mil tanto no primeiro quanto no segundo mês após a adesão.</p>
                        </div>
                        <div className="quantidade w-22rem -mt-1">
                            <h3 className='font-medium text-base'>PagBank Saúde</h3>
                            <p className='font-light text-sm'>Tenha o plano ouro grátis no primeiro mês, pagando R$ 19,90 nos próximos 11 meses após a adesão.</p>
                        </div>
                    </div>
                </Card>
                <Card className='w-10 flex align-items-center'>
                    <div className="img flex align-items-start p-2 ml-7 gap-6">
                        <img className='w-6rem -ml-6' alt='card' src='https://assets.pagseguro.com.br/ps-cart-assets/1.46.0/legacy/app/public/assets/images/visa-card-80x54.png'/>
                        <div>
                            <h1 className='w-14rem text-base line-height-3 -ml-5 font-medium'>Cartão Internacional da Conta PagBank GRÁTIS</h1>
                        </div>
                        <div className="info w-22rem ml-0 -mt-1 text-sm line-height-4">
                           <li>Use o dinheiro de suas vendas na hora</li>
                           <li>Sem mensalidade, anuidade e fatura</li>
                           <li>Para compras, controle e gestão do seu dinheiro</li>
                        </div>
                        <div className="w-22rem -mt-1 -ml-7">
                            <div className="card flex justify-content-center align-items-center gap-2">
                                <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                <h1 className='text-sm'>Quero receber o Cartão grátis</h1>
                            </div>
                            <div>
                                <p className='w-22rem text-sm ml-8'><span className='font-medium'>Importante:</span> esse cartão não tem limite de crédito, só funciona se você tiver saldo na conta.</p>
                            </div>
                        </div>
                    </div>
                </Card>
                <div className='w-full mt-2 ml-8 flex gap-2'>
                    <i className='pi pi-plus ml-8 text-blue-800'></i>
                    <a className='text-blue-800 no-underline hover:underline' href="">Adicionar mais produtos</a>
                </div>
            </div>
            <div className='cart-footer flex ml-8 w-full gap-4'>
                <div className='w-5 ml-5'>
                    <Card className='w-full mt-4 flex-wrap flex'>
                        <div className="img w-full h-3rem flex -mt-5 gap-2 align-items-center border-bottom-1 border">
                            <img className='w-2rem ' alt='card' src='https://assets.pagseguro.com.br/ps-cart-assets/1.46.0/legacy/app/public/assets/images/pix/PIX2.svg'/>
                            <span className='w-25rem text-sm'>Prepare-se para receber pelo QR Code Pix na maquininha</span>
                        </div>
                        <p>Receba as vendas de cartão e Pix na mesma conta.</p>
                        <div className='flex align-items-center gap-2'>
                            <Checkbox onChange={e => setChecked1(e.checked)} checked={checked1}></Checkbox>
                            <p>Cadastrar chave Pix aleatória</p>
                        </div>
                    </Card>
                    <div className='w-full h-3rem flex mt-5 gap-3 border-bottom-1  border-400'>
                        <i className='pi pi-truck' style={{ color: '#46B55D', fontSize: '2rem'}}></i>
                        <span className='uppercase text-green-600'>Frete Grátis</span>para todo o Brasil<span/>
                    </div>
                    <div className='w-full flex mt-5 gap-5 align-items-center list-none'>
                        <i className='pi pi-clock' style={{ color: '#46B55D', fontSize: '2rem'}}></i>
                        <div className='flex flex-column text-xs font-light gap-2'>
                            <li><span className='font-medium'>Sudeste:</span> 2 a 3 dias úteis</li>
                            <li><span className='font-medium'>Sul e Nordeste:</span> 3 a 5 dias úteis</li>
                            <li><span className='font-medium'>Centro-Oeste:</span> 3 a 5 dias úteis</li>
                            <li><span className='font-medium'>Norte:</span> 5 a 7 dias úteis</li>
                        </div>
                    </div>
                </div>
                <div className='pagamento flex flex-column p-4 w-5 h-28rem bg-bluegray-100'>
                    <div className='h-7rem flex flex-column border-bottom-1'>
                        <div className='flex align-items-center justify-content-between'>
                            <h3>Subtotal <span className='text-sm'>(1 item)</span></h3>
                            <span className='text-lg'>R$ 298,00</span>
                        </div>
                        <div className='flex align-items-center justify-content-between -mt-4'>
                            <h3>Frete</h3>
                            <span className='text-xl text-green-600 font-semibold uppercase '>Grátis</span>
                        </div>
                        <div className='mt-4 flex align-items-center justify-content-between'>
                            <h3>Total</h3>
                            <div>
                                <h1 className='font-light'>12x R$ <span className='font-semibold'>24.90</span></h1>
                                <p className='-mt-3 ml-1'>à vista por R$ 298,80</p>
                            </div>
                        </div>
                        <div className='flex justify-content-end mt-3'>
                            <Button className='flex w-4' size='large' label='Continuar' severity='Continuar'/>
                        </div>
                        <div className='w-full mt-2'>
                            <p>Ao avançar, você declara estar de acordo com os <span><a className='no-underline hover:underline' href="">Termos do contrato do PagBank</a></span> e <span><a className='no-underline hover:underline' href="">Politica de Privacidade</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;