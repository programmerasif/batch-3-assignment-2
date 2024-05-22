import { Request, Response } from 'express';
import { productService } from './product.services';
import {
  ProductOrderValidationSchema,
  ProductValidationSchema,
} from './product.validation';
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
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
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
  const id = req.params.productId;
  const result = await productService.getSpecificProductIntoDB(id);
  res.status(200).json({
    success: true,
    message: 'Products fetched successfully!',
    data: result,
  });
};
// update by specfic id
const updateSpecificProduct = async (req: Request, res: Response) => {
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
};
// delete document
const deleteSpecificProduct = async (req: Request, res: Response) => {
  const id = req.params.productId;
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
};

// new order
const orderProduct = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodPrsedData = ProductOrderValidationSchema.parse(order);
    const result = await productService.addOrder(
      zodPrsedData,
      zodPrsedData.productId,
    );
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    // here i am handeling multiple error
    if (
      (error as Error).message == 'Insufficient quantity available in inventory'
    ) {
      res.status(500).json({
        success: false,
        message: (error as Error).message,
      });
    }
    if ((error as Error).message == 'Order not found') {
      res.status(500).json({
        success: false,
        message: (error as Error).message,
      });
    }

    res.status(500).json({
      success: false,
      message: 'Route not found',
    });
  }
};
// Retrieve specfic Orders by email
const retrieveSpecficOrders = async (req: Request, res: Response) => {
  const email = req.query.email;

  try {
    if (email) {
      const result = await productService.retrieveAllOrdersIntoDB(
        email as string,
      );
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      const result = await productService.retrieveAllOrdersIntoDB();
      res.status(200).json({
        success: true,
        message: 'Order fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    const errMsg = (error as Error).message || 'Unknown error occurred';
    // sending error response
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the order',
      error: errMsg,
    });
  }
};
export const productControlars = {
  creatProduct,
  getAllProduct,
  getSpecificProduct,
  updateSpecificProduct,
  deleteSpecificProduct,
  orderProduct,
  retrieveSpecficOrders,
};
