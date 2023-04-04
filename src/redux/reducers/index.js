import {
  GET_ALL_COMPANIES,
  GET_CATALOGOS_BY_COMPANY_ID,
  GET_CATALOGO_URL,
  GET_CATALOGO_BY_NAME,
} from "../actions";

const initialState = {
  allCompanies: [],
  companyCatalogo: [],
  catalogoUrl: "",
  catalogoName: "",
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COMPANIES:
      return {
        ...state,
        allCompanies: payload,
      };

    case GET_CATALOGOS_BY_COMPANY_ID:
      return {
        ...state,
        companyCatalogo: payload,
      };

    case GET_CATALOGO_URL:
      return {
        ...state,
        catalogoUrl: payload,
      };

    case GET_CATALOGO_BY_NAME:
      return {
        ...state,
        catalogoName: payload,
      };

    default:
      return state;
  }
};
