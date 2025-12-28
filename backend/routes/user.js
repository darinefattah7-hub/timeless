import express from "express";

const router = express.Router();
import { getWishlist, addToWishlist,postClearCart, deleteFromWishlist,clearWishlist,getConatct,getFeedback,getFeedbackAccessories,getFeedbackCustomerService,getCart,getFeedbackJewelry,postAddContactForm,postAddToCart,postRemoveFromCart,postUpdateCartQuantity,postFeedbackAccessories,postFeedbackCustomerService,postFeedbackJewelry } from "../controllers/user.js";




router.post("/wishlist/add/:productID",addToWishlist);

router.get("/wishlist", getWishlist);
router.post("/wishlist/remove/:productID", deleteFromWishlist);


router.get("/contact", getConatct);
router.post("/wishlist/clear", clearWishlist);


router.get("/feedback", getFeedback);

router.get("/feedbackJewelry", getFeedbackJewelry);
router.get("/feedbackAccessories", getFeedbackAccessories);
router.get("/feedbackCustomerService", getFeedbackCustomerService);


router.post("/addContactForm", postAddContactForm);

router.get("/cart", getCart);

router.post("/cart/add/:productID", postAddToCart);

router.post("/cart/clear", postClearCart);

router.post("/cart/update/:productID", postUpdateCartQuantity);

router.post("/cart/remove/:productID", postRemoveFromCart);

router.post("/addfeedbackAccessories", postFeedbackAccessories);


router.post("/addfeedbackCustomerService", postFeedbackCustomerService);

router.post("/addfeedbackJewelry", postFeedbackJewelry);
export default router;
