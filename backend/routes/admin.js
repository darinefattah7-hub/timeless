import express from "express";

const router = express.Router();
import { getAddProduct,getAllUsers,postAddByCollection,getAddByCollection,getAddByCategory,postChangeRole,postAddByCategory,getEditProduct,postAddProduct,postDeleteProduct,postEditProduct,postSelectCategory } from "../controllers/admin.js";


router.get("/add", getAddProduct);
router.get("/users", getAllUsers);
router.post("/change-role",postChangeRole);
router.get("/add/collection/:collection",getAddByCollection);
router.post("/add/collection/:collection",postAddByCollection);
router.post("/select", postSelectCategory);
router.post("/add-product", postAddProduct);
router.get("/editProduct/:productId", getEditProduct);
router.get("/add/:category", getAddByCategory);
router.post("/add/:category", postAddByCategory);
router.post("/editProduct/:productId", postEditProduct);
router.post("/delete-product/:productId", postDeleteProduct);
export default router;