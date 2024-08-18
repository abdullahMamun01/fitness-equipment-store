import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  price: z.string().min(0, "Price must be a non-negative number"),
  stockQuantity: z.string().min(1, "stockQuantity are required"),
  //   .number()
  //   .int()
  //   .min(0, "Stock quantity must be a non-negative integer"),
  sku: z.string().min(1, "SKU is required"),
  brand: z.string().min(1, "Brand is required"),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, 'File is required'),
  tags: z.string().min(1, "Tags are required"),
  availability: z.boolean(),
  discountPrice: z.string().min(1, "Price are required")
  //   .number()
  //   .min(0, "Discount must be a non-negative number")
  //   .max(100, "Discount must be at most 100"),
});