import React, { useState, useEffect } from 'react';
import PageDefault from '../../../PageDefault/pageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../FormField/formField';
import Button from '../../../Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (resp) => {
      const data = await resp.json();
      setCategorias([...data]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Pagina de Cadastro de Categoria:</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (values.nome.trim() !== '') {
            setCategorias([...categorias, values]);
            setValues(valoresIniciais);
          } else {
            alert('Digite um nome');
          }
        }}
      >
        <FormField
          name="nome"
          value={values.nome}
          onChange={handleChange}
          maxlenght="20"
          type="text"
          label="Nome: "
        />
        <FormField
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
          maxlenght="50"
          type="textarea"
          label="Descrição"
        />

        <FormField
          name="cor"
          value={values.cor}
          onChange={handleChange}
          type="color"
          label="Cor: "
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div>Carregando...</div>}

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria} ${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
