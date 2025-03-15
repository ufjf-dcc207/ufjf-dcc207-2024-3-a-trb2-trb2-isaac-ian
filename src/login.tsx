import React, { useState } from 'react';


const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubimiit = (e) => {
        e.preventDefault();

        if (usuario === 'isaac' && senha === '123') {
            alert('Bem vindo!');
        }
        else {
            setMensagem('Usuário ou senha inválidos');
        }
    }


};
