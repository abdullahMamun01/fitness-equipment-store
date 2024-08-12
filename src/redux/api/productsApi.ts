import { TCategory } from "../types";
import { baseAPi } from "./baseApi";


interface TProducts {
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
  




export const productsApi = baseAPi.injectEndpoints({
    endpoints: (build) => ({
        products: build.query<TProducts[], string |undefined>({
            query: () => {
                return {
                    url: '/api/products',
                    method: "GET"
                }
            },
            transformResponse: (response: { success: boolean; statusCode: number; data: TProducts[] }) => response.data,

        }),
        singleProduct : build.query<TProducts, string>({
            query: (productId: string) => {

                return {
                    url: `/api/products/${productId}`,
                    method: "GET"
                }
            },
            transformResponse: (response: { success: boolean; statusCode: number; data: TProducts }) => response.data,

        }),
        categories : build.query<TCategory[],void>({
            query: () => {

                return {
                    url: `/api/products/categories`,
                    method: "GET"
                }
            },
            transformResponse: (response: { success: boolean; statusCode: number; data: TCategory[] }) => response.data,
        })
    }),
});


export const  {useProductsQuery,useSingleProductQuery, useCategoriesQuery} = productsApi