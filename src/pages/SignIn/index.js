//Arquivo de form para login
import { useEffect, useState } from 'react';
import './styles.css';
import { getItem, setItem } from '../../utils/storage';
import Logo from '../../assets/novalogo.svg';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';


function SignIn() {








  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = getItem('token');

    if (token) {
      navigate('/main');
    }

  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const response = await api.post('/login', {
        email,
        senha: password
      })

      const { dadosUsuario, token } = response.data;

      setItem('token', token);
      setItem('userId', dadosUsuario.id);
      setItem('userName', dadosUsuario.nome);


      navigate('/maincards');

    } catch (error) {
      window.alert(error.response.data.mensagem);
    }


  }

  return (
    <div className='container'>
      <form className='form-login' onSubmit={handleSubmit}>
        <img src={Logo} alt="logo" />

        <div className='form-body'>

          <h3>Boas-vindas!</h3>
          <p>Use seu e-mail e senha para acessar a conta</p>

          <div className="container-form">
            <label htmlFor="email">E-mail</label>
            <input
              id='email'
              type="text"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="container-form">
            <label htmlFor="senha">Senha</label>
            <input
              id='senha'
              type="password"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        </div>

        <button className='button'>
          Login
        </button>

        <div className="cadastro">
          <span>Não possui conta?
            <span className='link-cadastro'
              onClick={() => navigate('/signup')}> Cadastrar</span>
          </span>

        </div>
      </form>
    </div>
  )
}

export default SignIn;