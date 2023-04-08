import React from 'react'
import './Card.css'
import { useState } from 'react';

const Card = () => {
    const [nome, setNome] = useState('Ravi');
    const cargo = 'Developer';
    const cidade = 'Fortaleza, Ceará'
    const imagem = 'https://github.com/ravifel.png'
    const [labelBotao, setLabelBotao] = useState('Mudar para nome completo')

    //Função Mostrar "Nome Completo" e "Apelido"
    const mudarNome = () => {
        if (nome === 'Ravi') {
            setNome('Ravi Felipe Ferreira Silva')
            setLabelBotao('Mudar para apelido')
        } else if (nome === 'Ravi Felipe Ferreira Silva') {
            setNome('Ravi')
            setLabelBotao('Mudar para nome completo')
        }
    }
    return (
        <div>
            <div className='cabecalho' style={{ backgroundColor: '#10b592' }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4 style={{ textTransform: 'uppercase' }}>{nome}</h4>
                <h5>{cargo} - {cidade}</h5>
                <hr />
                <button onClick={() => mudarNome()} className='botao'>{labelBotao}</button>

            </div>
        </div >
    )
}

export default Card
