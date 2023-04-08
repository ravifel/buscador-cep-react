import React, { useState } from 'react'
import './NavBar.css'

const NavBar = () => {

    const [labelCep, setLabelCep] = useState('Buscador de CEP')
    const [labelCard, setLabelCard] = useState('Card Ravi')

    return (
        <div className='container-nav-bar'>
            <a className='botao' href="/cep">{labelCep}</a>
            <a className='botao' href="/card">{labelCard}</a>
        </div>
    )
}

export default NavBar
