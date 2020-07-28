import React from 'react';
import PageDefault from '../../../PageDefault/pageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Pagina de Cadastro de Categoria</h1>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
