import { TCategory } from "../types";
import { baseAPi } from "./baseApi";

interface TProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  category: string;
  brand: string;
  img: string;
  images: string[];
  stock: number;
  sku: string;
  tags: string[];
  stockStatus: string;
  weight: number;
  material: string;
  color: string;
  manufacturer: string;
  releaseDate: string;
  createdAt: string;
  updatedAt: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
}

const productsApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    products: build.query<TProduct[], string | undefined>({
      query: (query) => {
        const url = query ? "/products" + query : "/products";
        return {
          url,
          method: "GET",
        };
      },
      transformResponse: (response: {
        success: boolean;
        statusCode: number;
        data: TProduct[];
      }) => response.data,
    }),
    singleProduct: build.query<TProduct, string>({
      query: (productId: string) => {
        return {
          url: `/api/products/${productId}`,
          method: "GET",
        };
      },
      transformResponse: (response: {
        success: boolean;
        statusCode: number;
        data: TProduct;
      }) => response.data,
    }),
    //add single product
    addProduct: build.mutation<TProduct, TProduct>({
      query: (payload) => {
        return {
          url: `/api/products`,
          method: "POST",
          body: payload,
          endpoint: "admin",
        };
      },
      transformResponse: (response: {
        success: boolean;
        statusCode: number;
        data: TProduct;
      }) => response.data,
    }),

    //update single product
    updateProduct: build.mutation<TProduct, Partial<TProduct>>({
      query: (payload) => {
        return {
          url: `/api/products`,
          method: "PATCH",
          body: payload,
          endpoint: "admin",
        };
      },
      transformResponse: (response: {
        success: boolean;
        statusCode: number;
        data: TProduct;
      }) => response.data,
    }),

    //delete single product
    deleteProduct: build.mutation<TProduct, string>({
      query: (productId) => {
        return {
          url: `/api/products/${productId}`,
          method: "PATCH",
          endpoint: "admin",
        };
      },
      transformResponse: (response: {
        success: boolean;
        statusCode: number;
        data: TProduct;
      }) => response.data,
    }),

    //category list
    categories: build.query<TCategory[], void>({
      query: () => {
        return {
          url: `/products/categories`,
          method: "GET",
        };
      },
      transformResponse: (response: {
        success: boolean;
        statusCode: number;
        data: TCategory[];
      }) => response.data,
    }),
  }),
});

export const {
  useProductsQuery,
  useSingleProductQuery,
  useCategoriesQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
