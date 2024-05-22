import { z } from "zod";

// Product Order Schema
export const ProductOrderValidationSchema = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number().positive(),
    quantity: z.number().int().positive(),
  });
  