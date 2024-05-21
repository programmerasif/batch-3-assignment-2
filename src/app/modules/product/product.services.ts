// service
import { IProduct } from "./product.interface"
import Product from "./product.model"

const creatProductIntoDB = async(product:IProduct) =>{
    const result = await Product.create(product)
    return result
}

export const productService = {
    creatProductIntoDB
}