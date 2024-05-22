import { z } from 'zod';
// Variant Schema
export const VariantValidationSchema = z.object({
  type: z.string().min(1),
  value: z.string().min(1),
});

// Inventory Schema
export const InventoryValidationSchema = z.object({
  quantity: z.number().int().nonnegative(),
  inStock: z.boolean(),
});

// Main Product Schema
export const ProductValidationSchema = z.object({
  name: z.string().min(1),
  description: z.string().max(600),
  price: z.number().positive(),
  category: z.string().min(1),
  tags: z.array(z.string()),
  variants: z.array(VariantValidationSchema),
  inventory: InventoryValidationSchema,
});

// Product Order Schema
export const ProductOrderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

