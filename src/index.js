import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Pages/Home/App';
import CadastroVideo from './components/Pages/Cadastro/Video/video.js';
import CadastroCategoria from './components/Pages/Cadastro/Categoria/categoria.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
