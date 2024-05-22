//  order schema
import mongoose, { Schema } from 'mongoose';
import {  IProductOrder } from './order.interface';
const productOrderSchema = new Schema<IProductOrder>({
    email: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false, // Disable the __v field
  },
  );

 export const Order = mongoose.model<IProductOrder>('Productorde',productOrderSchema)