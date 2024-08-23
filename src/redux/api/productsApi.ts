
import { IProductMutate, TCategory } from "../types";
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

type updateProduct = {
  productId:string ,
  data: Partial<TProduct>
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
      providesTags: ["Products"],
      transformResponse: (response: {
        success: boolean;
        statusCode: number;
        data: TProduct[];
      }) => response.data,
      
    },
    
  
  
  ),

    //get single product
    singleProduct: build.query<TProduct, string>({
      query: (productId: string) => {
        return {
          url: `/products/${productId}`,
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
    addProduct: build.mutation<TProduct, IProductMutate>({
      query: (payload) => {
        return {
          url: `/products`,
          method: "POST",
          body: payload,
          endpoint: "admin",
        };
      },
      invalidatesTags: ['Products'],
      transformResponse: (response: {
        success: boolean;
        statusCode: number;
        data: TProduct;
      }) => response.data,
    }),

    //update single product
    updateProduct: build.mutation<TProduct, updateProduct >({
      query: (payload) => {
        return {
          url: `/products/${payload.productId}`,
          method: "PATCH",
          body: payload.data,
          endpoint: "admin",
        };
      },
      invalidatesTags: ['Products'],

      transformResponse: (response: {
        success: boolean;
        statusCode: number;
        data: TProduct;
      }) => response.data,
    }),

    //delete single product
    deleteProduct: build.mutation<void, string>({
      query: (productId) => {
        return {
          url: `/products/${productId}`,
          method: "DELETE",
          endpoint: "admin",
        };
      },
      invalidatesTags: ['Products'],
     
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
