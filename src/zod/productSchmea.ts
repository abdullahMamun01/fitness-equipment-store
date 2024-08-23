import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Product description is required'),
  category: z.string().min(1, 'Product category is required'),
  price: z.string().transform((price) => Number(price)), // Adjust regex as needed
  stock: z.string().transform((stock) => Number(stock)), // Adjust regex as needed
  sku: z.string().min(1, 'SKU is required'),
  brand: z.string().min(1, 'Brand is required'),
  tags: z.string()
  .transform((tag) => tag.split(","))
  .refine((tagsArray) => tagsArray.length > 0, {
    message: "At least one tag is required",
  }), // Assuming tags are optional
  stockStatus: z.string().optional(), // Checkbox values are boolean
  discountedPrice: z.string().transform((dp) => Number(dp)), // Adjust regex as needed
  // File field (optional image upload)
  img: z.string() ,
  images: z.array(z.string().nonempty('image is required')),

});





