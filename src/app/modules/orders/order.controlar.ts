import { OrderProductService } from './order.services';
import { ProductOrderValidationSchema } from './order.validation';
import { Request, Response } from 'express';

// new order
const orderProduct = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodPrsedData = ProductOrderValidationSchema.parse(order);
    const result = await OrderProductService.addOrderIntoDB(
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
      const result = await OrderProductService.retrieveAllOrdersIntoDB(
        email as string,
      );
      if (result.length == 0) {
        res.status(500).json({
          success: false,
          message: 'Orders not found!',
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Orders fetched successfully for user email!',
          data: result,
        });
      }
    } else {
      const result = await OrderProductService.retrieveAllOrdersIntoDB();
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

export const OrderProductControlars = {
  orderProduct,
  retrieveSpecficOrders,
};
