import { api } from "../../config/apiConfig.js";
import { FIND_PRODUCT_BY_ID, FIND_PRODUCTS } from "./ActionType.js";

export const findProducts = (reqData) => ({
  type: FIND_PRODUCTS,
  payload: api
    .get("/api/products", {
      params: {
        colors: reqData.colors,
        sizes: reqData.sizes,
        minPrice: reqData.minPrice,
        maxPrice: reqData.maxPrice,
        minDiscount: reqData.minDiscount,
        category: reqData.category,
        stock: reqData.stock,
        sort: reqData.sort,
        pageNumber: reqData.pageNumber,
        pageSize: reqData.pageSize,
      },
    })
    .then((response) => {
      console.log("Product data:", response.data);
      return response.data; // Return the actual data fetched from the API
    }), //pic of this code needs to change after remove the console.log("",)
});


export const findProductById = (productId) => ({
  type: FIND_PRODUCT_BY_ID,
  payload: api.get(`/api/products/id/${productId}`),
});
