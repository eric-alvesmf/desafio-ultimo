//Arquivo de form para login
import './styles.css';
import Logo from '../../assets/novalogo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';
import { addProdutos } from '../../utils/requisitions';
import React from 'react';

// titulo
// categoria
// descricao
// preco
// estoque
// foto

const defaultForm = {
  id: '',
  usuario_id: '',
  nome: '',
  estoque: '',
  preco: '',
  categoria: '',
  descricao: '',
  urlImagem: ''
}

function AddProduct() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState("");
  let data = {};

  const [form, setForm] = useState({ ...defaultForm });

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      // if (!form.nome || !form.categoria || !form.descricao || !form.preco || !form.estoque || !form.imagem) {
      //   window.alert('Preencha todos os campos!');
      //   return;
      // }

      data =
      {
        nome: form.nome,
        estoque: form.estoque,
        preco: form.preco,
        categoria: form.categoria,
        descricao: form.descricao,
        imagem: selectedFile,
      }

      addProdutos(data).then(response => {
        console.log(response)
      })

      navigate('/maincards');

    } catch (error) {
      window.alert(error.response.data.mensagem);
    }

    console.log(form.preco)
  }

  function handleChangeForm({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }






  //------------------------------------------------------------------







  return (
    <div className='container-add-product'>
      <form className='form-login-add' onSubmit={handleSubmit}>
        <h3>Adicionar novo produto</h3>

        <div className='form-body'>

          <div className="container-form">
            <label htmlFor="nome">Título</label>
            <input
              type="text"
              name='nome'
              placeholder='Nome do produto'
              value={form.nome}
              onChange={handleChangeForm} />
          </div>

          <div className="container-form">
            <label htmlFor="loja">categoria</label>
            <select
              type="text"
              name='categoria'
              value={form.categoria}
              onChange={handleChangeForm}
              id="categoria">
              <option disabled={true} value="">Selecionar</option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Objetos">Objetos</option>
              <option value="Roupas">Roupas</option>
            </select>
          </div>

          <div className="container-form">
            <label
              htmlFor="descricao">Descrição do produto
            </label>

            <input
              type="text"
              name='descricao'
              value={form.descricao}
              onChange={handleChangeForm}
              id="descricao"
            />
          </div>


          <div className="container-form">
            <label
              htmlFor="estoque"> Estoque
            </label>

            <input
              type="text"
              name='estoque'
              value={form.estoque}
              onChange={handleChangeForm}
              id="estoque"
            />
          </div>

          <div className="container-form">
            <label
              htmlFor=""> Preco
            </label>

            <input
              type="text"
              name='preco'
              value={form.preco}
              onChange={handleChangeForm}
              id="preco"
            />
          </div>

          {/* <div className="container-form">
            <label
              htmlFor="price"> Preço
            </label>

            <input
              type="text"
              name='price'
              value={form.preco}
              onChange={handleChangeForm}
              id="price"

            />
          </div> */}


          <div className="container-form">
            <label
              htmlFor="addphoto">Adicionar foto
            </label>

            <input
              type="file"
              name='addphoto'
              onChange={(e) => setSelectedFile(e.target.files[0])}
              id="addphoto"
              accept="image/*"
            />
          </div>


        </div>

        <div className="buttons">
          <button className='button-publicar'>
            Publicar anuncio
          </button>

          <button
            className='button'
            onClick={() => navigate('/maincards')}>
            Cancelar
          </button>
        </div>



      </form>
    </div>
  )
}

export default AddProduct;