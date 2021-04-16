/* eslint-disable react/self-closing-comp */
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Container, Content, Background } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import logoImg from '../../assets/logo.svg';


interface CadastrarInFormData {
    disciplina: string;
    professor: string
    dia_semana: string;
    periodo: string
    horario: string;
}


const Professores: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { cadastrar } = useAuth();

    const handleSubmit = useCallback(async (data: CadastrarInFormData) => {
        console.log('executou')

    }, []);
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />


                <h1>a</h1>



            </Content>
        </Container>
    );
};

export default Professores;