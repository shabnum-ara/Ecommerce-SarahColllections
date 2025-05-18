import express from "express";

import orderController from "../controllers/orderController.js";
import adminauth from "../middleware/adminAuth.js";
import authuser from "../middleware/auth.js";

const {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateStatus,
  allOrders,
  userOrders,
  verifyStripe,
} = orderController;
const orderRouter = express.Router();

//admin feature
orderRouter.post("/list", adminauth, allOrders);
orderRouter.post("/status", adminauth, updateStatus);

//payment
orderRouter.post("/place", authuser, placeOrder);
// orderRouter.post("/stripe", authuser, placeOrderStripe);
orderRouter.post("/razorpay", authuser, placeOrderRazorpay);

orderRouter.post("/stripe", authuser, placeOrderStripe);

//user feature
orderRouter.post("/userorders", authuser, userOrders);

//verify payment
orderRouter.post("/verifyStripe", authuser, verifyStripe);

export default orderRouter;
