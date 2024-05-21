// service
import { IProduct } from "./product.interface"
import Product from "./product.model"

const creatProductIntoDB = async(product:IProduct) =>{
    const result = await Product.create(product)
    return result
}
const getAllProductIntoDB = async() =>{
const result = await Product.find()
return result
}
export const productService = {
    creatProductIntoDB,
    getAllProductIntoDB
}