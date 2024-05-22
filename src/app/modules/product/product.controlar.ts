import { Request, Response } from 'express';
import { productService } from './product.services';
import { ProductValidationSchema } from './product.validation';
import { Error } from 'mongoose';
// creat produce
const creatProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const zodPrsedData = ProductValidationSchema.parse(product);

    //  here we call the services function
    const result = await productService.creatProductIntoDB(zodPrsedData);

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
// get all product and handeling searching by $regex
const getAllProduct = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm;

  try {
    if (searchTerm) {
      const result = await productService.getAllProductIntoDB(
        searchTerm as string,
      );
      if (result.length == 0) {
        res.status(500).json({
          success: false,
          message: 'Products not found',
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Products fetched successfully!',
          data: result,
        });
      }
    } else {
      const result = await productService.getAllProductIntoDB();
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    const errMsg = (error as Error) || 'Unknown error occurred';
    // sending error response

    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the Product',
      error: errMsg.message,
    });
  }
};
// find my Specific id
const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productService.getSpecificProductIntoDB(id);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Products not found!',
    });
  }
};
// update by specfic id
const updateSpecificProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const newProduct = req.body;
    const zodPrsedData = ProductValidationSchema.parse(newProduct);
    const result = await productService.updateSpecificProductIntoDB(
      id,
      zodPrsedData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product not found!',
    });
  }
};
// delete document
const deleteSpecificProduct = async (req: Request, res: Response) => {
  const id = req.params.productId;
  try {
    const result = await productService.deleteSpecificProductIntoDB(id);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data: null,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Product not found',
    });
  }
};

export const productControlars = {
  creatProduct,
  getAllProduct,
  getSpecificProduct,
  updateSpecificProduct,
  deleteSpecificProduct,
};
