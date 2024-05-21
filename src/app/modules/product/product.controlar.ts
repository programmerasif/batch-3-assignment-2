import { Request, Response } from 'express';
import { productService } from './product.services';

// creat produce
const creatProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    console.log(product);

    //  here we call the services function
    const result = await productService.creatProductIntoDB(product);

    // here I am sending response to user
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    const errMsg = (error as Error).message || 'Unknown error occurred';
    // sending error response
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the Product',
      error: errMsg,
    });
  }
};
// get all product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductIntoDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    const errMsg = (error as Error).message || 'Unknown error occurred';
    // sending error response
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the Product',
      error: errMsg,
    });
  }
};

export const productControlars = {
  creatProduct,
  getAllProduct,
};
