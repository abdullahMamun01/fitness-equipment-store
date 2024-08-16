import { z } from "zod";

export type TBilling = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    zipCode: string;
    street: string;
  }

const billingSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().
        min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must be at most 15 digits'),
    country: z.string().min(2, 'Country is required'),
    city: z.string().min(1, 'City is required'),
    postalCode: z.string().
        min(5, 'Zip code must be at least 5 characters').
        max(10, 'Zip code must be at most 10 characters'),
        
    street: z.string().min(10, 'Street is required'),
});


export { billingSchema }