import api from "../services/api";
import { getItem } from './storage';

export async function loadProdutos() {

  let token = '';
  token = getItem('token');

  try {
    const response = await api.get('/produtos', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });


    return response.data


  } catch (error) {
    console.log(error.response);
  }
}

// export async function loadTransactions() {
//   let token = '';

//   token = getItem('token');

//   try {
//     const response = await api.get('/transacao', {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     return response.data;
//   } catch (error) {
//     console.log(error.response);
//   }
// }