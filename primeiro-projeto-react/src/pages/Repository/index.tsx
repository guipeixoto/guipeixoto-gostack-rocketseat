import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParamsDTO {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParamsDTO>();

  return <h1>Repository: {params.repository}</h1>;
};

export default Repository;
