import React from 'react'
import './Cep.css'
import { useState } from 'react'

const Cep = () => {

    const [endereco, setEndereco] = useState(
        {
            cep: '',
            rua: '',
            bairro: '',
            complemento: '',
            cidade: '',
            estado: '',
            codigoArea: ''
        }
    )

    //GUARDAR ENDEREÇOS PESQUISADOS
    const [enderecos, setEnderecos] = useState([])

    const manipularEndereco = (evento) => {

        const cep = evento.target.value

        setEnderecos(lista => [...lista, endereco])
        //espalhando a lista antigo e adicionando um endereço novo
        //retorna um array novo -  com os elemntos antigos e um novo que foi adicionado

        setEndereco({
            cep
        })

        if (cep && cep.length === 8) {
            //Requiseção para a API
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(resposta => resposta.json())
                .then(dados => {
                    setEndereco(enderecoAntigo => {
                        return {
                            ...enderecoAntigo,
                            cep: cep,
                            rua: dados.logradouro,
                            bairro: dados.bairro,
                            complemento: dados.complemento,
                            cidade: dados.localidade,
                            estado: dados.uf,
                            codigoArea: dados.ddd
                        }
                    })
                })

            return endereco;
        }
    }
    return (
        <div className={`campo campo`}>
            <label>
                CEP
            </label>
            <input
                type='text'
                placeholder='Informe o CEP'
                onChange={manipularEndereco}
            />

            <div className='informacoes-cep'>
                {/* <h4>CEP: {endereco.cep}</h4>
                <hr />
                <p>Rua: {endereco.rua}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>Cidade: {endereco.cidade}</p>
                <p>Estado: {endereco.estado}</p> */}

                <table>
                    <tr>
                        <th>CEP</th>
                        <th>Rua</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                    </tr>
                    <tr>
                        <td>{endereco.cep}</td>
                        <td>{endereco.rua}</td>
                        <td>{endereco.bairro}</td>
                        <td>{endereco.cidade}</td>
                        <td>{endereco.estado}</td>
                    </tr>
                </table>
            </div>


        </div>
    )
}

export default Cep
