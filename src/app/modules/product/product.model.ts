// model
import mongoose, { Schema } from 'mongoose';
import { IProduct} from './product.interface';

const VariantSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const InventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// main product schema
const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: { type: [String], required: true },
    variants: { type: [VariantSchema], required: true },
    inventory: { type: InventorySchema, required: true },
  },
  {
    versionKey: false,
  }
);



const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
