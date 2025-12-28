import express from "express";
import { getTimeless,getBridalCollection,getEternalBloom,getTimelessCollection,getAllCategoriesPage,getRings,getViewProducts,getCharms,getProductDetail,getWatches,getNecklaces,getEarrings,getBracelets,getExchange,getFAQ,getLocation,getOurStory,getPayment,getPrivacy,getSearchProduct,getShippingPolicy} from "../controllers/timeless.js";

const router = express.Router();


router.get("/", getTimeless);
router.get("/rings",  getRings );

router.get("/necklaces",  getNecklaces );

router.get("/bracelets",  getBracelets );

router.get("/earrings",  getEarrings );
router.get("/allProducts",getAllCategoriesPage);
router.get("/eternal-bloom", getEternalBloom);
router.get("/timeless-collection", getTimelessCollection);
router.get("/bridal-collection", getBridalCollection);
router.get("/watches",  getWatches );
router.get("/products/:productId", getProductDetail);
router.get("/charms",  getCharms);
router.get("/products", getViewProducts ) ; 
router.get("/exchange", getExchange);
router.get("/shippingPolicy", getShippingPolicy);
router.get("/FAQ", getFAQ);
router.get("/ourStory", getOurStory);
router.get("/payment",  getPayment);
router.get("/location", getLocation);
router.get("/privacy", getPrivacy);
router.get("/searchProduct", getSearchProduct);
export default router;
