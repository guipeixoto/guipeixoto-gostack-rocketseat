import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParamsDTO {
  repository: string;
}

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParamsDTO>();
  const repository: Repository = {
    full_name: 'Teste',
    owner: {
      login: 'Teste',
      avatar_url: 'teste',
    },
    description: 'asa',
  };

  return (
    <>
      <Header>
        <img src={logoImg} alt='Github Explorer' />

        <Link to='/'>
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src='' alt='' />
          <div>
            <strong>dsdsadsda/sadasdasdas</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1800</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1800</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
          key={repository.full_name}
          to={`/repository/${repository.full_name}`}
        >
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
