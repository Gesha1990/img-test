import * as axios from "axios/index";

const instance = axios.create({
  baseURL: "https://goodbuy.hypertext.site/api/v1/search/facets/",
  headers: {
    'Content-Type': 'application/json'
  }
});

export const productsAPI = {
  getAllProducts() {
    return instance.get().then((response) => response.data);
  },
};
