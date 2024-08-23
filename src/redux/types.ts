
export type TCategory = {

    _id: string,
    count: number,
    categoryName: string
}


export interface IProductMutate {
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    img: string;
    images: string[];
    stock: number;
    sku: string;
    tags: string[];
    discountedPrice: number;
    stockStatus: 'inStock' | 'outOfStock' | 'preOrder' | 'discontinued';
}