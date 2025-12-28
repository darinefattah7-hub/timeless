import { Wishlist } from "../models/wishlists.js";
import { Contact } from "../models/contact.js";
import { Cart } from "../models/cart.js";
import { Jewelry } from "../models/Jewelry.js";
import { Accessory } from "../models/accessories.js";
import { CustomerService } from "../models/customerService.js";
import { Product } from "../models/product.js";



export const addToWishlist = (req, res,next) => {
  
    const userId = req.session.userId;
    const productId = req.params.productID;

 
    const wishlist = new Wishlist(null, userId, productId);
    wishlist
    .save()
    .then((result) => res.redirect("/products/"+productId))
    .catch((err) => {
      console.error(err);
      res.render("homepage", {
        pageTitle: `Homepage`,
        errorMessage: "Product cannot be added to wishlist",
        isAuthenticated: req.session.isLoggedIn,
        role: req.session.role,
      });
    });
};

export const getWishlist = (req, res,next) => {
 if(!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
 }
    const userId = req.session.userId || req.session.user?.id;

    
    Wishlist.fetchWishlistsByUserId(userId)
    .then((result) => {
      const product = result[0];
      res.render("wishlist", {
        pageTitle: "Wishlist",
        product: product,
        errorMessage: null,
        isAuthenticated: req.session.isLoggedIn,
        currentUser: req.session.currentUser,
         role: req.session.role,
      });
    })
    .catch((error) => {
        console.error(error);
      res.status(500).render("homepage", {
        pageTitle: "Homepage",
        product: null,
        errorMessage: "Product not found",
        role: req.session.role,
        isAuthenticated: req.session.isLoggedIn,
        currentUser: req.session.currentUser,
      });
    });

  
};
export const deleteFromWishlist = (req, res,next) => {
  const productId = req.params.productID;
const userId = req.session.userId;

    console.log("Deleting product with ID:", productId);
        Wishlist.deleteByProductId(userId, productId)
        .then((result) => res.redirect("/products/"+productId))
         .catch((error) => {
         console.log(error);
         res.status(500).render("homepage", {  
              pageTitle: "Wishlist",
                errorMessage: "Could not remove item from wishlist",
                isAuthenticated: req.session.isLoggedIn,
                role: req.session.role,
                currentUser: req.session.currentUser,   
                });
         });
     };

export const clearWishlist = (req, res,next) => {
  const userId = req.session.userId;
       
        Wishlist.deleteByUserId(userId)
        .then((result) => {
            res.redirect("/user/wishlist");
        })
         .catch((error) => {
         console.log(error);
         res.status(500).render("homepage", {  
              pageTitle: "Wishlist",
                errorMessage: "Could not clear wishlist",
                isAuthenticated: req.session.isLoggedIn,
                role: req.session.role,
                currentUser: req.session.currentUser,   
                });
         });
        };
export const getConatct = (req, res,next) =>  {
    if (!req.session.isLoggedIn) {
    return  res.redirect("/auth/login");
  }
  res.render("contact", {
    pageTitle: "Contact page",  
    product: null,
    errorMessage: null,
    isAuthenticated: req.session.isLoggedIn,
     role: req.session.role,
  });
};
export const getFeedback = (req, res,next) => {
    if (!req.session.isLoggedIn) {
    return  res.redirect("/auth/login");
  }
  res.render("feedback", {
    pageTitle: "Feedback page",  
    product: null,
    errorMessage: null,
    isAuthenticated: req.session.isLoggedIn,
     role: req.session.role,
  });
};

export const getFeedbackJewelry = (req, res,next) => {
    if (!req.session.isLoggedIn) {
    return  res.redirect("/auth/login");
  }
  res.render("feedbackJewelry", {
    pageTitle: "Feedback for Jewelry page",  
    product: null,
    errorMessage: null,
    isAuthenticated: req.session.isLoggedIn,
     role: req.session.role,
  });
};

export const getFeedbackAccessories = (req, res,next) => {
    if (!req.session.isLoggedIn) {
    return  res.redirect("/auth/login");
  }

 res.render("feedbackAccessories", {
    pageTitle: "Feedback for Accessories page",  
    product: null,
    errorMessage: null,
    isAuthenticated: req.session.isLoggedIn,
     role: req.session.role,
  });
};
export const getFeedbackCustomerService = (req, res,next) => {
    if (!req.session.isLoggedIn) {
    return  res.redirect("/auth/login");
  }
  res.render("feedbackCustomerService", {
    pageTitle: "Feedback for Customer Service page",  
    product: null,
    errorMessage: null,
    isAuthenticated: req.session.isLoggedIn,
     role: req.session.role,
  });
};

export const postAddContactForm = (req, res,next) => {
 
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;

    const message = req.body.message;


  if (!firstName || !lastName || !email || !phoneNumber || !message) {
    return res.status(400).render("contact", {
      pageTitle: "Contact page",
      product: null,
      errorMessage: "All inputs are required",
      isAuthenticated: req.session.isLoggedIn,
       role: req.session.role,
    });
  }
    const contact = new Contact(null, firstName, lastName, email, phoneNumber, message);
    contact
    .saveContact()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).render("add-product", {
        product: null,
        pageTitle: "Add products page",
        errorMessage: "Something went wrong",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};
export const getCart = (req, res,next) => {
    if (!req.session.isLoggedIn) {
    return  res.redirect("/auth/login");
  }
    const userId = req.session.userId || req.session.user?.id;
   
    Cart.fetchCartByUserId(userId)
    .then((result) => {
        const cartItems = result[0];
        res.render("cart", {
            pageTitle: "Shopping Cart",
            product: cartItems,
            errorMessage: null,
            isAuthenticated: req.session.isLoggedIn,
            currentUser: req.session.currentUser,
             role: req.session.role,
        });
    })
    .catch((error) => {
        console.error(error);
        res.status(500).render("homepage", {
            pageTitle: "Homepage",
            product: null,
            errorMessage: "Could not retrieve cart items",
            role: req.session.role,
            isAuthenticated: req.session.isLoggedIn,
            currentUser: req.session.currentUser,
        });
    });
};

export const postAddToCart = (req, res,next) => {
  const userId = req.session.userId;
  const productId = req.params.productID;


  
    const cart = new Cart(null, userId, productId);
    cart
    .saveCart()
  .then(() =>
    Wishlist.deleteByProductId(userId, productId),
     res.redirect("/user/cart"))
  .catch(err => {
    console.error(err);
    res.status(500).send("Error adding product to cart");
  });
};
export const postRemoveFromCart = (req, res,next) => {
    
  const userId = req.session.userId || req.session.user?.id;
  const productId = req.params.productID;
 Cart.removeByProductId(userId, productId)
  .then(() => res.redirect("/user/cart"))
  .catch(err => { console.error(err); res.status(500).send("Could not remove"); });
};
export const postUpdateCartQuantity = (req, res, next) => {
  const userId = req.session.userId || req.session.user?.id;
  const productId = req.params.productID;
  const quantity = req.body.quantity;

  Product.findById(productId)
    .then(([rows]) => {
      const product = rows[0];

      if (quantity > product.quantity) {
        return Cart.fetchCartByUserId(userId).then(([cartItems]) => {
          return res.render("cart", {
            pageTitle: "Shopping Cart",
            product: cartItems,
            errorMessage: "Only " + product.quantity + " items of "+ product.name+ " in stock.",
            isAuthenticated: req.session.isLoggedIn,
            currentUser: req.session.currentUser,
            role: req.session.role
          });
        });
      }

      return Cart.updateQuantity(userId, productId, quantity);
    })
    .then((result) => {
      if (!result) return; 
      res.redirect("/user/cart");
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Could not update");
    });
};



export const postClearCart = (req, res, next) => {
  const userId = req.session.userId || req.session.user?.id;

  Cart.getItemsByUserId(userId)
    .then(([items]) => {

      for (const item of items) {

        Product.reduceQuantity(item.productID, item.quantity);

        Product.increaseSold(item.productID, item.quantity);

      }
      return Cart.clearCartByUserId(userId);

    })
    .then(() => {
      res.redirect("/user/cart");
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Could not clear cart");
    });
};



export const postFeedbackAccessories = (req, res,next) =>  {
  const userId = req.session.userId; 
  const quality = req.body["accessories-quality"];
  const recommend = req.body["accessories-recommend"];
  const functionality = req.body["accessories-functionality"];
  const design = req.body["accessories-design"];
  const value = req.body["accessories-value"];

  if (!userId || !quality || !recommend || !functionality || !design || !value) {
    return res.status(400).render("feedbackAccessories", {
      pageTitle: "Feedback Accessories",
      errorMessage: "Please fill in all fields.",
      isAuthenticated: req.session.isLoggedIn,
       role: req.session.role,
    });
  }

  
    const accessory = new Accessory(null, userId, quality, recommend, functionality, design, value);
    accessory
    .saveAccessories()
    .then(() => {
      console.log("Feedback submitted successfully!");
      res.redirect("/");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).render("feedbackAccessories", {
        pageTitle: "Feedback Accessories",
        errorMessage: "Something went wrong, please try again.",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};

export const postFeedbackJewelry = (req, res,next) =>  {
  const userId = req.session.userId;
  const quality = req.body["jewelry-quality"];
  const taste = req.body["jewelry-taste"];
  const condition = req.body["jewelry-condition"];
  const style = req.body["jewelry-style"];
  const variety = req.body["jewelry-variety"];

  if (!userId || !quality || !taste || !condition || !style || !variety) {
    return res.status(400).render("feedbackJewelry", {
      pageTitle: "Jewelry Feedback",
      errorMessage: "Please fill in all fields.",
      isAuthenticated: req.session.isLoggedIn,
       role: req.session.role,
    });
  }

  
    const jewelry = new Jewelry(null, userId, quality, taste, condition, style, variety);
    jewelry
    .saveJewelry()  
  .then(() => res.redirect("/"))
  .catch((err) => {
    console.error(err);
    res.status(500).render("feedbackJewelry", {
      pageTitle: "Jewelry Feedback",
      errorMessage: "Something went wrong. Please try again.",
      isAuthenticated: req.session.isLoggedIn,
       role: req.session.role,
    });
  });
};
export const postFeedbackCustomerService = (req, res,next) =>  {
  const userId = req.session.userId;
  const experience = req.body["service-experience"];
  const checkoutDifficulty = req.body["service-assistance"];
  const helpUseful = req.body["service-help"];

  if (!userId || !experience || !checkoutDifficulty || !helpUseful) {
    return res.status(400).render("feedbackCustomerService", {
      pageTitle: "Customer Service Feedback",
      errorMessage: "Please fill in all fields.",
      isAuthenticated: req.session.isLoggedIn,
       role: req.session.role,
    });
  }

    const customerService = new CustomerService(null, userId, experience, checkoutDifficulty, helpUseful);  
    customerService
    .saveCustomerService()
    .then(() => res.redirect("/"))
    .catch((err) => {
      console.error(err);
      res.status(500).render("feedbackCustomerService", {
        pageTitle: "Customer Service Feedback",
        errorMessage: "Something went wrong. Please try again.",
        isAuthenticated: req.session.isLoggedIn,
         role: req.session.role,
      });
    });
};


