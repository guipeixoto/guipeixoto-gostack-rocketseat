import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt='GoBarber' />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name='name' placeholder='Nome' icon={FiUser} />
        <Input name='email' placeholder='E-mail' icon={FiMail} />
        <Input
          name='password'
          type='password'
          placeholder='Senha'
          icon={FiLock}
        />

        <Button type='submit'>Cadastrar</Button>
      </form>

      <a href='/register'>
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
