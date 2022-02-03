import {
  GET_ALL_COMPANIES,
  GET_CATALOGOS_BY_COMPANY_ID,
  GET_CATALOGO_URL,
} from "../actions";

const initialState = {
  allCompanies: [],
  companyCatalogo: [],
  catalogoUrl: "",
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

    default:
      return state;
  }
};
