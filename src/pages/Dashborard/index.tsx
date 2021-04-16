import React, { useCallback, useRef } from 'react';
import {
    FiArrowLeft, FiUser,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';
import getValidationErrors from '../../utils/getValidationErrors';

interface CadastrarInFormData {
    disciplina: string;
    professor: string
    dia_semana: string;
    periodo: string
    horario: string;
}


const Dashboard: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { cadastrar } = useAuth();

    const handleSubmit = useCallback(async (data: CadastrarInFormData) => {
        console.log('executou')
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                disciplina: Yup.string().required('Nome Obrigatório'),
                professor: Yup.string().required('Nome Obrigatório'),
                dia_semana: Yup.string().required('Nome Obrigatório'),
                periodo: Yup.string().required('Nome Obrigatório'),
                horario: Yup.string().required('Nome Obrigatório'),

            });

            await schema.validate(data, {
                abortEarly: false,
            });
            await cadastrar({
                disciplina: data.disciplina,
                professor: data.professor,
                dia_semana: data.dia_semana,
                periodo: data.periodo,
                horario: data.horario,
            });
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = getValidationErrors(error);
                formRef.current?.setErrors(errors);
            }
        }
    }, [cadastrar]);
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça o seu Cadastro</h1>

                    <Input name="disciplina" icon={FiUser} placeholder="Disciplina" />
                    <Input name="professor" icon={FiUser} placeholder="Professor" />
                    <Input name="dia_semana" icon={FiUser} placeholder="Dia da Semana" />
                    <Input name="periodo" icon={FiUser} placeholder="Período" />
                    <Input name="horario" icon={FiUser} placeholder="Horario" />
                    <Button type="submit">Cadastrar</Button>

                </Form>
                <Link to="/professores">
                    <FiArrowLeft />
                    Professores Cadastrados
                    </Link>


            </Content>
        </Container>
    );
};

export default Dashboard;