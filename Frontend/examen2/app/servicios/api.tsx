import axios from "axios";

const API_URL = "http://localhost:5000";

export const getPromedioCategoria = async () => {
  const response = await axios.get(`${API_URL}/promedio-categoria`);
  return response.data.data;
};

export const getProductosMarca = async () => {
  const response = await axios.get(`${API_URL}/productos-marca`);
  return response.data.data;
};