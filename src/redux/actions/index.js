import axios from "axios";

const hosting = {
  // localhost: "https://catalogos-api.onrender.com",
  localhost: "http://localhost:3001",
};

export const GET_ALL_COMPANIES = "GET_ALL_COMPANIES";
export const GET_CATALOGOS_BY_COMPANY_ID = "GET_CATALOGOS_BY_COMPANY_ID";
export const GET_CATALOGO_URL = "GET_CATALOGO_URL";
export const GET_CATALOGO_BY_NAME = "GET_CATALOGO_BY_NAME";

export const getAllCompanies = () => async (dispatch) => {
  try {
    const result = await axios.get(`${hosting.localhost}/companies`);
    const isCompanies = result.data;
    dispatch({
      type: GET_ALL_COMPANIES,
      payload: isCompanies,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getCatalogoByCompanyId = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`${hosting.localhost}/companies/${id}`);
    const catalogos = result.data;
    dispatch({
      type: GET_CATALOGOS_BY_COMPANY_ID,
      payload: catalogos,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getCataologoUrl = (url) => (dispatch) => {
  dispatch({
    type: GET_CATALOGO_URL,
    payload: url,
  });
};

export const getCatalogoByName = (name) => (dispatch) => {
  dispatch({
    type: GET_CATALOGO_BY_NAME,
    payload: name,
  });
};
