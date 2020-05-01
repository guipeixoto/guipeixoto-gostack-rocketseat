import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder='Digite o nome do repositório' />

        <button>Pesquisar</button>
      </Form>

      <Repositories>
        <a href='teste'>
          <img
            src='https://avatars3.githubusercontent.com/u/12798162?s=460&u=7b49f15da7373b13b62ad50c059387660dbad6f4&v=4'
            alt='Guilherme Peixoto'
          />
          <div>
            <strong>guipeixoto/semana-omnistack-11</strong>
            <p>Semana de aprendizado da stack NodeJS, ReactJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img
            src='https://avatars3.githubusercontent.com/u/12798162?s=460&u=7b49f15da7373b13b62ad50c059387660dbad6f4&v=4'
            alt='Guilherme Peixoto'
          />
          <div>
            <strong>guipeixoto/semana-omnistack-11</strong>
            <p>Semana de aprendizado da stack NodeJS, ReactJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img
            src='https://avatars3.githubusercontent.com/u/12798162?s=460&u=7b49f15da7373b13b62ad50c059387660dbad6f4&v=4'
            alt='Guilherme Peixoto'
          />
          <div>
            <strong>guipeixoto/semana-omnistack-11</strong>
            <p>Semana de aprendizado da stack NodeJS, ReactJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img
            src='https://avatars3.githubusercontent.com/u/12798162?s=460&u=7b49f15da7373b13b62ad50c059387660dbad6f4&v=4'
            alt='Guilherme Peixoto'
          />
          <div>
            <strong>guipeixoto/semana-omnistack-11</strong>
            <p>Semana de aprendizado da stack NodeJS, ReactJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img
            src='https://avatars3.githubusercontent.com/u/12798162?s=460&u=7b49f15da7373b13b62ad50c059387660dbad6f4&v=4'
            alt='Guilherme Peixoto'
          />
          <div>
            <strong>guipeixoto/semana-omnistack-11</strong>
            <p>Semana de aprendizado da stack NodeJS, ReactJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img
            src='https://avatars3.githubusercontent.com/u/12798162?s=460&u=7b49f15da7373b13b62ad50c059387660dbad6f4&v=4'
            alt='Guilherme Peixoto'
          />
          <div>
            <strong>guipeixoto/semana-omnistack-11</strong>
            <p>Semana de aprendizado da stack NodeJS, ReactJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
