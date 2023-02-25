//Arquivo de form para login
import './styles.css';
import Logo from '../../assets/novalogo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';

// titulo
// categoria
// descricao
// preco
// estoque
// foto

const defaultForm = {
  nome: '',
  nome_loja: '',
  email: '',
  senha: '',
  confirmar_senha: ''
}

function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ ...defaultForm });

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      if (!form.nome || !form.nome_loja || !form.email || !form.senha || !form.confirmar_senha) {
        window.alert('Preencha todos os campos!');
        return;
      }

      if (form.senha !== form.confirmar_senha) {
        window.alert('Senhas diferentes');
        return;
      }

      const response = await api.post('/usuarios',
        {
          nome: form.nome,
          nome_loja: form.nome_loja,
          email: form.email,
          senha: form.senha
        }
      )

      if (response.status > 204) {
        window.alert(response.status);
        return;
      }

      navigate('/');

    } catch (error) {
      window.alert(error.response.data.mensagem);
    }
  }

  function handleChangeForm({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  return (
    <div className='container'>
      <form className='form-login' onSubmit={handleSubmit}>
        <img src={Logo} alt="logo" />

        <div className='form-body'>

          <h3>Adicione o produto 3</h3>

          <div className="container-form">
            <label htmlFor="nome">Título</label>
            <input
              type="text"
              name='nome'
              value={form.nome}
              onChange={handleChangeForm} />
          </div>

          <div className="container-form">
            <label htmlFor="loja">Categoria</label>
            <input
              type="text"
              name='nome_loja'
              value={form.nome_loja}
              onChange={handleChangeForm}
              id="loja" />
          </div>

          <div className="container-form">
            <label
              htmlFor="descricao">Descrição do produto
            </label>

            <input
              type="text"
              name='descricao'
              value={form.email}
              onChange={handleChangeForm}
              id="descricao"
            />
          </div>

          <div className="container-form">
            <label
              htmlFor="senha"> Senha
            </label>

            <input
              type="password"
              name='senha'
              value={form.senha}
              onChange={handleChangeForm}
              id="senha"
            />
          </div>

          <div className="container-form">
            <label
              htmlFor="check">Confirme sua senha
            </label>

            <input
              type="password"
              name='confirmar_senha'
              value={form.confirmar_senha}
              onChange={handleChangeForm}
              id="check"
            />
          </div>

          <div className='disclaimer'>
            <span>Ao criar uma conta, você concorda com a nossa<br></br>
              <span className='privacy'> Política de Privacidade</span> e <span className='terms'>Termos de serviço</span>
            </span>

          </div>

        </div>

        <button className='button'>
          Criar conta
        </button>

        <div className="link-login">
          <span>Já tem conta?
            <span className='link-interno'
              onClick={() => navigate('/')}> Fazer login</span>
          </span>
        </div>
      </form>
    </div>
  )
}

export default AddProduct;