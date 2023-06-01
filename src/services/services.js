import axios from "axios";

const api = axios.create({baseURL: 'http://localhost:3201/sistema'});
//base URL é a base padrão que irei utilizar como back-end, no caso a url acima é a base e irei utilizar o /usuarios

export default api;
//exportando para conseguir usar em diferentes components da página